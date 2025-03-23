import { Priority } from "@/types/priority";
import { Status } from "@/types/status";
import { Task } from "@/types/task";
import { fetchStatuses } from "@/utils/server/fetch-statuses";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {groupedTasks.map(({ status, tasks }, index) => (
        <div key={index} className="p-4">
          <h2
            className={`text-white 
                ${status.id == 1 && "bg-[#F7BC30]"} 
                ${status.id == 2 && "bg-[#FB5607]"}
                ${status.id == 3 && "bg-[#3A86FF]"}
                rounded-lg
                justify-center
                text-center
                p-2.5
                `}
          >
            {status.name}
          </h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Link
                  href={`/protected/${task.id}`}
                  className="block p-2 hover:bg-gray-200 border rounded-2xl my-5 border-[#FB5607] "
                >
                  <div className="flex justify-between">
                    <button className="flex border rounded-lg p-1.5">
                      <Image
                        src={
                          priorities.find(
                            (priority) => priority.id === task.priority_id
                          )?.icon || ""
                        }
                        alt="Priority Icon"
                        width={24}
                        height={24}
                      />

                      {
                        priorities.find(
                          (priority) => priority.id === task.priority_id
                        )?.name
                      }
                    </button>
                    <div className="bg-[#be12be] text-white rounded-2xl text-center p-1.5">
                      I კლასი
                    </div>
                  </div>
                  <div className="font-bold my-5">{task.name}</div>
                  {task.description && (
                    <div className="overflow-hidden">
                      {task.description.slice(0, 100)}
                      {task.description.length > 100 ? "..." : ""}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
