"use server";

import { createClient } from "@/utils/supabase/server";

export async function updateBlackboardContent(id: string, content: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("blackboard")
    .update({ content })
    .eq("id", id);
  if (error instanceof Error) {
    console.log("Error: " + error.message);
    return;
  }
}
