import { currentWeek } from "./currentWeek";
import { dayOfWeekOfFirstDayOfMonth } from "./dayOfWeekOfFirstDayOfMonth";
import { daysArrayOfCurrentMonth } from "./daysArrayOfCurrentMonth";
import { currentMonth, currentYear } from "@/constants";

export const daysArrayOfCurrentWeek = () =>
  daysArrayOfCurrentMonth().filter((date) => {
    const dayIndex =
      date.getDate() +
      dayOfWeekOfFirstDayOfMonth(currentYear, currentMonth) -
      1;
    const week = Math.floor(dayIndex / 7) + 1;
    return week === currentWeek;
  });
