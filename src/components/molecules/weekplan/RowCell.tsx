import { fetchWeekPlanTask } from "@/utils";
import { TextArea } from "@/components";

export default async function RowCell({ id }: { id: number }) {
  const data = await fetchWeekPlanTask(id);

  return (
    <div className="w-full h-full p-1">
      <TextArea id={id} text={data && data[0] ? data[0].text : ""} />
    </div>
  );
}
