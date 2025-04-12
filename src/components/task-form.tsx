"use client";

import { Priority } from "@/types/priority";
import { Task } from "@/types/task";
import { Status } from "@/types/status";
import { createTask } from "@/utils/create-task";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TaskForm = ({
  statuses,
  priorities,
}: {
  statuses: Status[];
  priorities: Priority[];
}) => {
  const initialFormData: Task = {
    name: "",
    description: null,
    priority_id: 2,
    status_id: 1,
  };
  const [formData, setFormData] = useState<Task>(initialFormData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);

  const [isValidTitle, setisValidTitle] = useState<null | boolean>(null);
  const [isValidDescription, setisValidDescription] = useState<null | boolean>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const validateInput = (value: string) => {
    const regex = /^[a-zA-Z0-9\u10D0-\u10FF\s]*$/;
    return regex.test(value) && value.length >= 2 && value.length <= 255;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    const regex = /^[a-zA-Z0-9\u10D0-\u10FF\s]*$/;

    setFormData((prevData) => {
      const newValue = ["priority_id", "status_id", "employee_id"].includes(
        name
      )
        ? Number(value)
        : value;

      if (name === "name" || name === "description") {
        if (!regex.test(value) && value !== "") return prevData;

        if (name === "name") {
          setisValidTitle(
            value.length === 0 ? null : value.length >= 2 && value.length <= 255
          );
        }
        if (name === "description") {
          setisValidDescription(
            value.length === 0 ? null : value.length >= 4 && value.length <= 255
          );
        }
      }

      const updatedData = { ...prevData, [name]: newValue };

      localStorage.setItem("formData", JSON.stringify(updatedData));

      return updatedData;
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ) => {
    e.preventDefault();

    if (!validateInput(formData.name)) {
      setError("ფორმა შეიცავს არასწორ მონაცემებს!");
      return;
    }
    try {
      localStorage.removeItem("formData");
      await createTask(formData);

      await fetch("/api/send-task-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      router.push("/protected");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error: " + error.message);
      } else {
        console.log("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col p-5">
        <div className="flex w-full justify-around">
          <div className="flex flex-col p-5 w-full">
            <label htmlFor="name">სათაური*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Enter name"
              required
              className={`w-full p-2 border rounded ${
                isValidTitle === null
                  ? "border-gray-400"
                  : isValidTitle
                  ? "border-green-500"
                  : "border-red-500"
              }`}
            />
            <div
              className={`text-sm ${
                isValidTitle === null
                  ? "text-gray-400"
                  : isValidTitle
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <div>მინ. 2 სიმბ.</div>
              <div>მაქს. 255 სიმბ.</div>
            </div>
            <br />
            <label htmlFor="description">აღწერა</label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              aria-label="Enter description"
              className={`w-full p-2 border rounded ${
                isValidDescription === null
                  ? "border-gray-400"
                  : isValidDescription
                  ? "border-green-500"
                  : "border-red-500"
              }`}
            />
            <div
              className={`text-sm ${
                isValidDescription === null
                  ? "text-gray-400"
                  : isValidDescription
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <div>მინ. 4 სიმბ.</div>
              <div>მაქს. 255 სიმბ.</div>
            </div>
            <br />
          </div>
          <div className="w-full pr-5">
            <label htmlFor="priority_id">პრიორიტეტი*</label>
            <select
              id="priority_id"
              name="priority_id"
              value={formData.priority_id}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              {priorities.map((priority) => (
                <option key={priority.id} value={priority.id}>
                  {priority.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full pr-5">
            <label htmlFor="priority_id">სტატუსი*</label>
            <select
              id="status_id"
              name="status_id"
              value={formData.status_id}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              {statuses.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex justify-end p-10">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            დავალების შექმნა
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
