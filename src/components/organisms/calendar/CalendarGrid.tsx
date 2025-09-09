import DayGrid from "./DayGrid";
import { CalendarGridProps } from "@/types";
import { useState } from "react";
import CalendarBurgerMenu from "./CalendarBurgerMenu";
import { useCalendarGrid } from "@/hooks";
import EmptyDays from "./EmptyDays";
import WeekDays from "./WeekDays";

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
  const isMonthView = calendarType === "month";

  const { handleCalendarViewCahnge, filtered } = useCalendarGrid({
    year,
    month,
    setCalendarType,
    days,
    selectedWeek,
  });
  return (
    <>
      <div className="mb-2.5 ">
        <CalendarBurgerMenu
          value={calendarType}
          onChange={handleCalendarViewCahnge}
        />
      </div>
      <div
        className={`grid gap-1 ${!isMonthView ? "grid-cols-1" : "grid-cols-7"} 
        bg-[#13161f] text-white rounded-2xl p-3.5 shadow-[-15px_15px_5px_#282f40]
        m-1.5
        `}
      >
        {isMonthView ? (
          <>
            <WeekDays />
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
                calendarType={calendarType}
              />
            ))}
          </>
        ) : (
          <>
            {filtered.map((day, index) => (
              <DayGrid
                calendarType={calendarType}
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
