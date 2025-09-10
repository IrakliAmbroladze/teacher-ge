import React from "react";
import { daysArrayOfCurrentWeek } from "@/utils";

export default function HeaderCell({ index }: { index: number }) {
  const days = daysArrayOfCurrentWeek();
  const month = days[index].toLocaleString("ka-GE", { month: "long" });
  const dayName = days[index].toLocaleString("ka-GE", { weekday: "long" });
  const dayNumber = days[index].toLocaleString("ka-GE", { day: "numeric" });
  return (
    <div>
      <div className="text-center">{dayName}</div>
      <div className="text-center">
        {dayNumber} {month}
      </div>
    </div>
  );
}
