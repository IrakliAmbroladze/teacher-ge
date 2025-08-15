import {
  dayOfWeekOfFirstDayOfMonth,
  daysInMonth,
} from "@/features/calendar/utils";

export const useCalendar = (year: number, month: number) => {
  const weeks = Math.ceil(
    (dayOfWeekOfFirstDayOfMonth(year, month) + daysInMonth(year, month)) / 7
  );

  return { weeks };
};
