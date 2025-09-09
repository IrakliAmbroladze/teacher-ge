import { Contacts } from "@/components";
import { Contact } from "@/types";
import { fetchContacts } from "@/utils";
import React from "react";

export default async function ContactsPage() {
  const contacts: Contact[] = await fetchContacts();

  return <Contacts contacts={contacts} />;
}
