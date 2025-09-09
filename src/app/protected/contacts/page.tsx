import { fetchContacts } from "@/utils";
import React from "react";

export default async function ContactsPage() {
  const contacts = await fetchContacts();
  console.log("contacts are: ", contacts);
  return <div>ContactsPage</div>;
}
