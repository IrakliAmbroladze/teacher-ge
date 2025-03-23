"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchStatuses() {
  const supabase = createClient();
  const { data, error } = await (await supabase).from("statuses").select();
  if (error instanceof Error) {
    console.log("Error: " + error.message);
  } else {
    console.log(error);
  }
  return data ? data : [];
}
