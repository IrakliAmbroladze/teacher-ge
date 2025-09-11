"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchWeekPlanTasks() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("weekPlanTasks").select();
  if (error instanceof Error) {
    console.log("Error: " + error.message);
  } else {
    console.log(error);
  }
  return data ? (data as [{ id: number; text: string | null }]) : [];
}
