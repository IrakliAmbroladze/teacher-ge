"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchWeekPlanHeader(id: number) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("weekPlanHeader")
    .select()
    .eq("id", id);
  if (error instanceof Error) {
    console.log("Error: " + error.message);
    return;
  }
  return data;
}
