import { Blackboard } from "@/features";
import { getBlackboardContent } from "@/lib/supabase/getBlackboardContent";
import { Suspense } from "react";

export default async function ClassRoom({
  params,
}: {
  params: Promise<{ classroom: string }>;
}) {
  const { classroom } = await params;
  const content = getBlackboardContent(classroom);
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-stone-400 text-center">
        {classroom.toUpperCase()}
      </h1>
      <Suspense fallback={<div className="text-center"> ... </div>}>
        <Blackboard contentPromise={content} />
      </Suspense>
    </>
  );
}
