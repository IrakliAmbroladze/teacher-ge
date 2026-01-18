import { Blackboard } from "@/features";

export default async function ClassRoom({
  params,
}: {
  params: Promise<{ classroom: string }>;
}) {
  const { classroom } = await params;
  return (
    <>
      <Blackboard name={classroom} />
    </>
  );
}
