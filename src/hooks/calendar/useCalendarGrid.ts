import { dayOfWeekOfFirstDayOfMonth } from "@/utils";
import { SetStateAction } from "react";

export const useCalendarGrid = ({
  setCalendarType,
  year,
  month,
  days,
  selectedWeek,
}: {
  setCalendarType: React.Dispatch<SetStateAction<"month" | "week">>;
  year: number;
  month: number;
  days: Date[];
  selectedWeek: number;
}) => {
  const handleCalendarViewCahnge = (value: string) =>
    setCalendarType(value as "month" | "week");

  const filtered = days.filter((date) => {
    const dayIndex =
      date.getDate() + dayOfWeekOfFirstDayOfMonth(year, month) - 1;
    const week = Math.floor(dayIndex / 7) + 1;
    return week === selectedWeek;
  });

  return { handleCalendarViewCahnge, filtered };
};
