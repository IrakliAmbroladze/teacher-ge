import { HEADER_HEIGHT } from "@/lib/constants";
import { Priority } from "@/types/priority";
import { Task } from "@/types/task";
import { fetchPriorities } from "@/utils/server/fetch-priorities";
import { fetchTasks } from "@/utils/server/fetch-tasks";

export default async function ProtectedPage() {
  const tasks: Task[] = await fetchTasks();
  const priorities: Priority[] = await fetchPriorities();

  return (
    <div
      className="flex-1 w-full flex flex-col items-center justify-center"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <h2 className="font-bold text-2xl mb-4">Tasks list</h2>
      <div className="text-2xl mb-4">
        {tasks?.map((task) => (
          <div key={task.id} className="flex gap-5">
            <div className="font-bold">{task.name}</div>
            <div>{task.description}</div>
            <div>
              {priorities
                .filter((priority) => priority.id === task.priority_id)
                .map((pr) => pr.name)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
