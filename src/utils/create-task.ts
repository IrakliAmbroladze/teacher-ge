"use server";

import { Task } from "@/types/task";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function createTask(taskData: Task) {
  const supabase = createClient();
  const {
    data: { session },
  } = await (await supabase).auth.getSession();

  if (!session?.access_token) {
    throw new Error("User is not authenticated");
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  revalidatePath("/tasks");
  return { success: true };
}
