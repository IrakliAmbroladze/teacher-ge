import * as utils from "../../../features/calendar/utils";
import { CalendarGridProps } from "@/types";

type WeekGridType = CalendarGridProps & {
  selectedWeek: number;
};

const WeekGrid = ({
  year,
  month,
  days,
  renderDay,
  selectedWeek,
}: WeekGridType) => {
  const filtered = days.filter((date) => {
    const dayIndex =
      date.getDate() + utils.dayOfWeekOfFirstDayOfMonth(year, month) - 1;
    const week = Math.floor(dayIndex / 7) + 1;
    return week === selectedWeek;
  });
  return (
    <div className="grid grid-cols-1 gap-1 lg:hidden">
      {filtered.map(renderDay)}
    </div>
  );
};

export default WeekGrid;
