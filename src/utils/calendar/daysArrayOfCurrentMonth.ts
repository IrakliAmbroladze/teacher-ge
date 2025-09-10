import { daysArrayOfMonth } from "./daysArrayOfMonth";

export const daysArrayOfCurrentMonth = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentMonthDays = daysArrayOfMonth(currentYear, currentMonth);
  return currentMonthDays;
};
