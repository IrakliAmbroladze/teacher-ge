"use server";

import { createClient } from "@supabase/supabase-js";

const fetchUsers = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SECRET!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers();

  if (error) console.error(error.message);
  return users;
};

export default fetchUsers;
