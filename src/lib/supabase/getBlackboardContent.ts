"use server";

import { createClient } from "@/utils/supabase/server";

export const getBlackboardContent = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blackboard")
    .select("*")
    .eq("id", id);

  if (error) {
    return { message: `❌ შეცდომა: ${error.message}` };
  }
  return {
    data: data?.[0]?.content ?? "",
    message: "✅ ოპერაცია წარმატებით განხორციელდა",
    status: "OK",
  };
};
