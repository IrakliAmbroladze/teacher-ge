import TaskForm from "@/components/task-form";
import { Priority } from "@/types/priority";
import { Status } from "@/types/status";
import { fetchPriorities } from "@/utils/server/fetch-priorities";
import { fetchStatuses } from "@/utils/server/fetch-statuses";
import React from "react";

const CreateTask = async () => {
  const priorities: Priority[] = await fetchPriorities();
  const statuses: Status[] = await fetchStatuses();
  return (
    <div className="px-2.5">
      <div className="text-4xl font-bold mt-20">შექმენი ახალი დავალება</div>
      <TaskForm statuses={statuses} priorities={priorities} />
    </div>
  );
};

export default CreateTask;
