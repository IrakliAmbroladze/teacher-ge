import TaskForm from "@/components/task-form";
import { Priority } from "@/types/priority";
import { fetchPriorities } from "@/utils/server/fetch-priorities";
import React from "react";

const CreateTask = async () => {
  const priorities: Priority[] = await fetchPriorities();
  return (
    <div className="px-[120px]">
      <div className="text-4xl font-bold mt-36">შექმენი ახალი დავალება</div>
      <TaskForm priorities={priorities} />
    </div>
  );
};

export default CreateTask;
