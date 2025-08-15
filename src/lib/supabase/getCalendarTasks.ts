"use server";

import { Task } from "@/features/calendar/type";
import { createClient } from "@/utils/supabase/server";

export const getCalendarTasks = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("calendar_tasks").select("*");
  const calendarTasks: Task = {};

  if (error) {
    console.error("Error fetching tasks:", error);
  } else {
    data.forEach(({ date_key, task_text, checked }) => {
      if (!calendarTasks[date_key]) calendarTasks[date_key] = [];
      calendarTasks[date_key].push({ text: task_text, checked });
    });
  }
  return calendarTasks;
};
