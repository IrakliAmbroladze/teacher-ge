export const useCalendar = (
  year: number,
  month: number,
  daysInMonth: (year: number, month: number) => number,
  dayOfWeekOfFirstDayOfMonth: (year: number, month: number) => number
) => {
  const days = Array.from(
    { length: daysInMonth(year, month) },
    (_, i) => new Date(year, month, i + 1)
  );

  const weeks = Math.ceil(
    (dayOfWeekOfFirstDayOfMonth(year, month) + daysInMonth(year, month)) / 7
  );

  return { days, weeks };
};
