import { currentMonth, currentYear } from "@/constants";

const firstDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 1);

const daysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

const dayOfWeekOfFirstDayOfMonth = (year: number, month: number) =>
  firstDayOfMonth(year, month).getDay();

const currentWeek = Math.ceil(
  (dayOfWeekOfFirstDayOfMonth(currentYear, currentMonth) +
    new Date().getDate()) /
    7
);

const getDateKey = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export { getDateKey, currentWeek, daysInMonth, dayOfWeekOfFirstDayOfMonth };
