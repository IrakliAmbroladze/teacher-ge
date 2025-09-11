"use server";

import { createClient } from "@/utils/supabase/server";

export async function updateWeekPlanTask(id: number, text: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("weekPlanTasks")
    .update({ text })
    .eq("id", id);
  if (error instanceof Error) {
    console.log("Error: " + error.message);
    return;
  }
}
