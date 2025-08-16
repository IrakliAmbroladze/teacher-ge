import { CalendarTasksArray } from "@/types";
import { createClient } from "./supabase/client";

export const toggleTask = async (
  tasks: CalendarTasksArray,
  key: string,
  idx: number,
  setTasks: React.Dispatch<React.SetStateAction<CalendarTasksArray>>
) => {
  const supabase = createClient();

  const taskToToggle = tasks[key][idx];

  // Find the matching task in Supabase
  const { data, error } = await supabase
    .from("calendar_tasks")
    .select("id")
    .eq("date_key", key)
    .eq("task_text", taskToToggle.text)
    .maybeSingle();

  if (error || !data) {
    console.error("Error finding task to toggle:", error);
    return;
  }

  const { id } = data;
  const updatedChecked = !taskToToggle.checked;

  const { error: updateError } = await supabase
    .from("calendar_tasks")
    .update({ checked: updatedChecked })
    .eq("id", id);

  if (updateError) {
    console.error("Error updating task:", updateError);
  } else {
    const updated = tasks[key].map((task, i) =>
      i === idx ? { ...task, checked: updatedChecked } : task
    );
    setTasks((prev) => ({ ...prev, [key]: updated }));
  }
};
