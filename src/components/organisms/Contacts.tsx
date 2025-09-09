"use client";

import type { Contact } from "@/types";
import React from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

export function Contacts({ contacts }: { contacts: Contact[] }) {
  return (
    <>
      {contacts.map((contact) => (
        <div key={contact.id} className="flex gap-2">
          <div>{contact.name}</div>
          <div>{contact.phone}</div>
          <div>{contact.role}</div>
          <div>{contact.description}</div>
        </div>
      ))}
    </>
  );
}
