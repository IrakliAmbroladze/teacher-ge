"use server";

import { createClient } from "@/utils/supabase/server";

export async function updateWeekPlanDay(id: number, day: number | string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("weekPlanHeader")
    .update({ day })
    .eq("id", id);
  if (error instanceof Error) {
    console.log("Error: " + error.message);
    return;
  }
}
