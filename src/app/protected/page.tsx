import { HEADER_HEIGHT } from "@/lib/constants";
import { Priority } from "@/types/priority";
import { Task } from "@/types/task";
import { fetchPriorities } from "@/utils/server/fetch-priorities";
import { fetchTasks } from "@/utils/server/fetch-tasks";
import TaskList from "@/components/task-list";

export default async function ProtectedPage() {
  const tasks: Task[] = await fetchTasks();
  const priorities: Priority[] = await fetchPriorities();

  return (
    <div
      className="flex-1 w-full flex flex-col items-center "
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <h2 className="font-bold text-2xl mb-4">Tasks list</h2>
      <TaskList tasks={tasks} priorities={priorities} />
    </div>
  );
}
