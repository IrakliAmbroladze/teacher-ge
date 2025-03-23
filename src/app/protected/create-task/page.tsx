import TaskForm from "@/components/task-form";
import React from "react";

const CreateTask = async () => {
  return (
    <div className="px-[120px]">
      <div className="text-4xl font-bold mt-36">შექმენი ახალი დავალება</div>
      <TaskForm />
    </div>
  );
};

export default CreateTask;
