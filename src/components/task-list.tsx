import { Priority } from "@/types/priority";
import { Status } from "@/types/status";
import { Task } from "@/types/task";
import { fetchStatuses } from "@/utils/server/fetch-statuses";
import GroupedTasks from "@/components/grouped-tasks";

const TaskList = async ({
  tasks,
  priorities,
}: {
  tasks: Task[];
  priorities: Priority[];
}) => {
  const statuses: Status[] = await fetchStatuses();

  const groupedTasks = statuses.map((status) => ({
    status,
    tasks: tasks.filter((task) => task.status_id === status.id),
  }));

  return <GroupedTasks priorities={priorities} groupedTasks={groupedTasks} />;
};
export default TaskList;
