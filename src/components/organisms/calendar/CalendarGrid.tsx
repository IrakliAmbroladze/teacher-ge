import DayGrid from "./DayGrid";
import { CalendarGridProps } from "@/types";
import { useState } from "react";
import CalendarBurgerMenu from "./CalendarBurgerMenu";
import { useCalendarGrid } from "@/hooks";
import EmptyDays from "./EmptyDays";

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
}: CalendarGridProps) => {
  const [calendarType, setCalendarType] = useState<"month" | "week">("month");

  const { handleCalendarViewCahnge, filtered } = useCalendarGrid({
    year,
    month,
    setCalendarType,
    days,
    selectedWeek,
  });
  return (
    <>
      <CalendarBurgerMenu
        value={calendarType}
        onChange={handleCalendarViewCahnge}
      />
      <div
        className={`grid gap-1 ${
          calendarType == "week" ? "grid-cols-1" : "grid-cols-7"
        } `}
      >
        {calendarType == "month" ? (
          <>
            <EmptyDays year={year} month={month} />
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
