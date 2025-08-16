import { currentMonth, currentYear } from "@/constants";
import { dayOfWeekOfFirstDayOfMonth } from "@/utils";

const currentWeek = Math.ceil(
  (dayOfWeekOfFirstDayOfMonth(currentYear, currentMonth) +
    new Date().getDate()) /
    7
);

export { currentWeek };
