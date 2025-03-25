"use server";

import { Comment } from "@/types/comment";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function createComment(commentData: Comment) {
  const supabase = createClient();
  const {
    data: { session },
  } = await (await supabase).auth.getSession();

  if (!session?.access_token) {
    throw new Error("User is not authenticated");
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify(commentData),
  });

  if (!response.ok) {
    throw new Error("Failed to create comment");
  }

  revalidatePath("/comments");
}
