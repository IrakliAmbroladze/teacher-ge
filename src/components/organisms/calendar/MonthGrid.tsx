import * as utils from "../../../features/calendar/utils";
import { CalendarGridProps } from "@/types";

const renderWeekdays = () => (
  <>
    {utils.weekdays.map((d) => (
      <div key={d} className="font-bold hidden lg:block">
        {d}
      </div>
    ))}
  </>
);

const MonthGrid = ({ year, month, days, renderDay }: CalendarGridProps) => {
  const emptyDays = Array.from(
    { length: utils.dayOfWeekOfFirstDayOfMonth(year, month) },
    (_, i) => <div key={`empty-${i}`} />
  );
  return (
    <div className="lg:grid gap-1 lg:grid-cols-7 hidden">
      {renderWeekdays()}
      {emptyDays}
      {days.map(renderDay)}
    </div>
  );
};

export default MonthGrid;
