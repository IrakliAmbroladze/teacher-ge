"use server";

import { Task } from "@/types/task";
import { createClient } from "../supabase/server";

export const fetchTask = async (id: string): Promise<Task | null> => {
  const supabase = createClient();
  const { data, error } = await (await supabase)
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();
  if (error instanceof Error) {
    console.log("Error: " + error.message);
  } else {
    console.log(error);
  }
  return data ? data : null;
};
