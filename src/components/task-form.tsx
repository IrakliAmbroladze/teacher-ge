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
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading((l) => !l);

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
      setLoading((l) => !l);
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
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                სათაური*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Enter name"
                required
                className={`dark:text-black mt-1 block w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 ${
                  isValidTitle === null
                    ? "border-gray-300"
                    : isValidTitle
                    ? "border-green-500 focus:ring-green-200"
                    : "border-red-500 focus:ring-red-200"
                }`}
              />
              <div
                className={`mt-1 text-xs ${
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
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                აღწერა
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                aria-label="Enter description"
                rows={4}
                className={`dark:text-black mt-1 block w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 ${
                  isValidDescription === null
                    ? "border-gray-300"
                    : isValidDescription
                    ? "border-green-500 focus:ring-green-200"
                    : "border-red-500 focus:ring-red-200"
                }`}
              />
              <div
                className={`mt-1 text-sm ${
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
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="priority_id"
                className="block text-sm font-medium text-gray-700"
              >
                პრიორიტეტი*
              </label>
              <select
                id="priority_id"
                name="priority_id"
                value={formData.priority_id}
                onChange={handleChange}
                required
                className="dark:text-black mt-1 block w-full p-3 border rounded-xl shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {priorities.map((priority) => (
                  <option key={priority.id} value={priority.id}>
                    {priority.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="priority_id"
                className="block text-sm font-medium text-gray-700"
              >
                სტატუსი*
              </label>
              <select
                id="status_id"
                name="status_id"
                value={formData.status_id}
                onChange={handleChange}
                required
                className="dark:text-black mt-1 block w-full p-3 border rounded-xl shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-200 text-black dark:text-black"
                : "bg-[#F05922] text-white "
            }font-semibold px-6 py-3 rounded-xl shadow-md transition duration-200 cursor-pointer`}
          >
            {loading ? "დავალება იქმნება ..." : "დავალების შექმნა"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
