import DayGrid from "./DayGrid";
import { dayOfWeekOfFirstDayOfMonth } from "@/utils";
import { CalendarGridProps } from "@/types";
import { useState } from "react";

type CalendarGrid = CalendarGridProps;

const CalendarGrid = ({
  year,
  month,
  days,
  selectedWeek,
  setSelectedDate,
  tasks,
  setTasks,
  handleEditClick,
  handleSaveClick,
  editingTask,
}: CalendarGrid) => {
  const [calendarType, setCalendarType] = useState<"month" | "week">("month");
  const emptyDays = Array.from(
    { length: dayOfWeekOfFirstDayOfMonth(year, month) },
    (_, i) => <div key={`empty-${i}`} />
  );
  const filtered = days.filter((date) => {
    const dayIndex =
      date.getDate() + dayOfWeekOfFirstDayOfMonth(year, month) - 1;
    const week = Math.floor(dayIndex / 7) + 1;
    return week === selectedWeek;
  });
  return (
    <>
      <div className="flex justify-center py-1.5">
        <span className="px-1.5">აირჩიე ცხრილის ფორმატი</span>
        <select
          value={calendarType}
          onChange={(e) => setCalendarType(e.target.value as "month" | "week")}
          className="px-2 text-black bg-gray-100"
        >
          <option value={"month"}>თვე</option>
          <option value={"week"}>კვირა</option>
        </select>
      </div>
      <div
        className={`grid gap-1 ${
          calendarType == "week" ? "grid-cols-1" : "grid-cols-7"
        } `}
      >
        {calendarType == "month" ? (
          <>
            {emptyDays}
            {days.map((day, index) => (
              <DayGrid
                key={index}
                date={day}
                setSelectedDate={setSelectedDate}
                tasks={tasks}
                setTasks={setTasks}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                editingTask={editingTask}
              />
            ))}
          </>
        ) : (
          <>
            {filtered.map((day, index) => (
              <DayGrid
                key={index}
                date={day}
                setSelectedDate={setSelectedDate}
                tasks={tasks}
                setTasks={setTasks}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                editingTask={editingTask}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default CalendarGrid;
