import { daysInMonth } from "@/utils";

export const daysArrayOfMonth = (year: number, month: number) =>
  Array.from(
    { length: daysInMonth(year, month) },
    (_, i) => new Date(year, month, i + 1)
  );
