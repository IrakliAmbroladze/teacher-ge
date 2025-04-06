"use client";

import { Priority } from "@/types/priority";
import { Status } from "@/types/status";
import { Task } from "@/types/task";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const GroupedTasks = ({
  groupedTasks,
  priorities,
}: {
  groupedTasks: {
    status: Status;
    tasks: Task[];
  }[];
  priorities: Priority[];
}) => {
  const [statusArray, setStatusArray] = useState<number[]>([]);
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const id = Number(target.id);
    setStatusArray((prev) =>
      prev.includes(id) ? prev.filter((s) => s != id) : [...prev, id]
    );
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {groupedTasks.map(({ status, tasks }, index) => (
        <div key={index} className="p-4">
          <button
            id={status.id.toString()}
            onClick={handleClick}
            className={`text-white 
            ${status.id == 1 && "bg-[#F7BC30]"} 
            ${status.id == 2 && "bg-[#FB5607]"}
            ${status.id == 3 && "bg-[#3A86FF]"}
            rounded-lg
            justify-center
            text-center
            p-2.5
            w-[300px]
            `}
          >
            {status.name}
          </button>
          <ul>
            {statusArray.map((status) =>
              tasks
                .filter((task) => task.status_id === status)
                .map((task) => (
                  <li key={task.id}>
                    <Link
                      href={`/protected/${task.id}`}
                      className="block p-2 hover:bg-gray-200 border rounded-2xl my-5 border-[#FB5607] w-[300px]"
                    >
                      <div className="flex justify-between">
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
                          <div className="bg-[#be12be] text-white rounded-2xl text-center p-1.5">
                            I კლასი
                          </div>
                        </div>
                        <div>თარიღი</div>
                      </div>
                      <div className="font-bold my-2.5">{task.name}</div>
                      {task.description && (
                        <div className="overflow-hidden">
                          {task.description.slice(0, 100)}
                          {task.description.length > 100 ? "..." : ""}
                        </div>
                      )}
                      <div className="flex justify-between my-2.5">
                        <Image
                          src="/icons/user.svg"
                          alt="Employee avatar"
                          width={31}
                          height={31}
                        />
                        <div className="flex justify-center items-center gap-1">
                          <Image
                            src="/icons/chat.svg"
                            alt="Chat Icon"
                            width={20}
                            height={19}
                          />
                          <div>2</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupedTasks;
