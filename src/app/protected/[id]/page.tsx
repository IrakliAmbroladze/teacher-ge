import DateComponent from "@/components/atoms/date";
import Comments from "@/components/comments";
import { Priority } from "@/types/priority";
import { Status } from "@/types/status";
import { Task } from "@/types/task";
import { fetchPriorities } from "@/utils/server/fetch-priorities";
import { fetchStatuses } from "@/utils/server/fetch-statuses";
import { fetchTask } from "@/utils/server/fetch-task";
import Image from "next/image";
import React, { JSX } from "react";

const TaskPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> => {
  const { id } = await params;
  const priorities: Priority[] = await fetchPriorities();
  const statuses: Status[] = await fetchStatuses();
  try {
    const task: Task | null = await fetchTask(id);
    if (!task) {
      return (
        <p className="flex items-center justify-center flex-1">
          Task does not exist
        </p>
      );
    }
    return (
      <div className="px-5 md:px-[120px]">
        <div className="flex flex-col md:flex-row mt-36">
          <div className=" flex-1">
            <div className="block p-2">
              <div className="flex gap-5">
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
                <div className="bg-[#FF66A8] text-white rounded-2xl text-center p-1.5">
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

              <div className="flex justify-between">
                <div className="flex justify-center items-center gap-1">
                  {/* <div>8</div> */}
                </div>
              </div>

              <div className="font-bold my-5">დავალების დეტალები</div>
              <div className="flex gap-10 my-5">
                <span>სტატუსი</span>{" "}
                <span>
                  {statuses.find((status) => status.id === task.status_id)
                    ?.name || "Unknown Status"}
                </span>
              </div>
              <div className="flex gap-10 my-5">
                <span>თანამშრომელი</span>{" "}
                <div className="flex gap-1.5">
                  <Image
                    src="/icons/user.svg"
                    alt="Employee avatar"
                    width={31}
                    height={31}
                  />
                  <span>{task.employee_id}</span>
                </div>
              </div>
              <div className="flex gap-10 my-5">
                <span>დავალების ვადა</span>
                {task.due_date && <DateComponent date={task.due_date} />}
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#F8F3FEA6]">
            <Comments id={id} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching task:", error);
    return (
      <p className="flex items-center justify-center flex-1">
        There was an issue fetching the task. Please try again later.
      </p>
    );
  }
};

export default TaskPage;
