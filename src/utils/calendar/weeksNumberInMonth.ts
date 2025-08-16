import {
  dayOfWeekOfFirstDayOfMonth,
  daysInMonth,
} from "@/features/calendar/utils";

export const weeksNumberInMonth = (year: number, month: number): number =>
  Math.ceil(
    (dayOfWeekOfFirstDayOfMonth(year, month) + daysInMonth(year, month)) / 7
  );
