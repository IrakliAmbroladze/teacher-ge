"use server";

import { createClient } from "@/utils/supabase/server";

export async function updateWeekPlanMonth(id: number, month: string | number) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("weekPlanHeader")
    .update({ month })
    .eq("id", id);
  if (error instanceof Error) {
    console.log("Error: " + error.message);
    return;
  }
}
