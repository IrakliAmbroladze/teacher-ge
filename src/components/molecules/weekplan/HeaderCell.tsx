import React from "react";
import { fetchWeekPlanHeader } from "@/utils";
import DateArea from "./DateArea";

export default async function HeaderCell({ index }: { index: number }) {
  const headerData = await fetchWeekPlanHeader(index);
  return (
    <div className="flex flex-col items-center justify-center text-sm">
      <span className="font-semibold">
        {
          ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი"][
            index
          ]
        }
      </span>
      {headerData && headerData[0] && (
        <DateArea
          id={headerData[0].id}
          date={headerData[0].day}
          month={headerData[0].month}
        />
      )}
    </div>
  );
}
