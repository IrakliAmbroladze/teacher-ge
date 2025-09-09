"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchContacts() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("contacts").select();
  if (error instanceof Error) {
    console.log("Error: " + error.message);
  } else {
    console.log(error);
  }
  return data ? data : [];
}
