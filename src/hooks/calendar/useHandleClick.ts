import { createCalendarTask } from "@/features/calendar/create-calendar-task";
import { Task } from "@/features/calendar/type";
import { getDateKey } from "@/utils";
import { addTask } from "@/utils";
import { createClient } from "@/utils/supabase/client";

export const useHandleClick = ({
  tasks,
  setEditingTask,
  editingTask,
  setTasks,
  setSelectedDate,
}: {
  tasks: Task;
  setEditingTask: React.Dispatch<
    React.SetStateAction<{
      key: string;
      idx: number;
      text: string;
    } | null>
  >;
  editingTask: {
    key: string;
    idx: number;
    text: string;
  } | null;
  setTasks: React.Dispatch<React.SetStateAction<Task>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) => {
  const handleEditClick = (key: string, idx: number) => {
    const taskToEdit = tasks[key][idx];
    setEditingTask({ key, idx, text: taskToEdit.text });
  };

  const handleSaveClick = async (newText: string) => {
    const supabase = createClient();

    if (!editingTask) return;
    const { key, idx } = editingTask;
    const taskToEdit = tasks[key][idx];

    const { data, error } = await supabase
      .from("calendar_tasks")
      .select("id")
      .eq("date_key", key)
      .eq("task_text", taskToEdit.text)
      .maybeSingle();

    if (error || !data) {
      console.error("Error finding task:", error);
      return;
    }

    const { id } = data;
    const { error: updateError } = await supabase
      .from("calendar_tasks")
      .update({ task_text: newText })
      .eq("id", id);

    if (updateError) {
      console.error("Error updating task:", updateError);
    } else {
      const updated = tasks[key].map((task, i) =>
        i === idx ? { ...task, text: newText } : task
      );
      setTasks((prev) => ({ ...prev, [key]: updated }));
    }
    setEditingTask(null);
  };

  const handleAdd = (text: string, selectedDate: Date) => {
    addTask(selectedDate, text, getDateKey, createCalendarTask, setTasks);
    setSelectedDate(null);
  };

  return { handleEditClick, handleSaveClick, handleAdd };
};
