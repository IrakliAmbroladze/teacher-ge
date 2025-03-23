"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchTasks() {
  const supabase = createClient();
  const { data, error } = await (await supabase).from("tasks").select();
  if (error instanceof Error) {
    console.log("Error: " + error.message);
  } else {
    console.log(error);
  }
  return data;
}
