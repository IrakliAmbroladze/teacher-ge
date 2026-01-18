import { Blackboard } from "@/features";
import { getBlackboardContent } from "@/lib/supabase/getBlackboardContent";

export default async function ClassRoom({
  params,
}: {
  params: Promise<{ classroom: string }>;
}) {
  const { classroom } = await params;
  const content = getBlackboardContent(classroom);
  return (
    <>
      <Blackboard name={classroom} contentPromise={content} />
    </>
  );
}
