import React from "react";
import { fetchWeekPlanHeader } from "@/utils";
//import { daysArrayOfCurrentWeek } from "@/utils";
import { geoWeekdaysArray } from "@/constants";
import DateArea from "./DateArea";

type Header = {
  id: number;
  day: number;
  month: string;
};
export default async function HeaderCell({ index }: { index: number }) {
  const [headerData]: Header = await fetchWeekPlanHeader(index);
  //  const days = daysArrayOfCurrentWeek();
  //  const month = days[index].toLocaleString("ka-GE", { month: "long" });
  //  const dayName = days[index].toLocaleString("ka-GE", { weekday: "long" });
  //  const dayNumber = days[index].toLocaleString("ka-GE", { day: "numeric" });
  return (
    <div>
      {geoWeekdaysArray[index]}
      <DateArea
        id={headerData.id}
        date={headerData.day}
        month={headerData.month}
      />
      {/*<div className="text-center">{dayName}</div>
      <div className="text-center">
        {dayNumber} {month}
      </div>*/}
    </div>
  );
}
