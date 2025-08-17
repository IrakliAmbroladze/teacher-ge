import { dayOfWeekOfFirstDayOfMonth } from "@/utils";

const EmptyDays = ({ year, month }: { year: number; month: number }) => {
  return Array.from(
    { length: dayOfWeekOfFirstDayOfMonth(year, month) },
    (_, i) => <div key={`empty-${i}`} />
  );
};

export default EmptyDays;
