import { CalendarTask } from "@/types";

export const addTask = async (
  date: Date,
  taskText: string,
  getKey: (date: Date) => string,
  createCalendarTask: (taskData: CalendarTask) => void,
  setTasks: React.Dispatch<
    React.SetStateAction<{
      [key: string]: { text: string; checked: boolean }[];
    }>
  >
) => {
  const key = getKey(date);
  const taskData = {
    date_key: key,
    task_text: taskText,
    checked: false,
  };
  try {
    await createCalendarTask(taskData);
    setTasks((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), { text: taskText, checked: false }],
    }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error: " + error.message);
    } else {
      console.log("An unknown error occurred.");
    }
  }
};
