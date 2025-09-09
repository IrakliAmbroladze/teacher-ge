"use client";

import type { Contact } from "@/types";
import React, { useMemo } from "react";
import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
  ModuleRegistry,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { HEADER_HEIGHT } from "@/lib/constants";

ModuleRegistry.registerModules([AllCommunityModule]);

export function Contacts({ contacts }: { contacts: Contact[] }) {
  const defaultColDef = useMemo(() => {
    return {
      width: 150,
      cellStyle: { fontWeight: "bold" },
      filter: true,
      filterParams: { buttons: ["clear"] },
      floatingFilter: true,
      editable: false,
    };
  }, []);

  const colDefs: ColDef<Contact>[] = [
    { field: "name" },
    {
      field: "phone",
      cellRenderer: (params: ICellRendererParams<Contact>) => {
        const phone = params.value;
        return (
          <a
            href={`tel:${phone}`}
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            {phone}
          </a>
        );
      },
    },
    {
      field: "role",

      width: 350,
    },
    { field: "description", width: 350 },
  ];
  return (
    <div
      style={{ height: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
      className="p-2.5"
    >
      <AgGridReact
        rowData={contacts}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        enableCellTextSelection={true}
      />
    </div>
  );
}
