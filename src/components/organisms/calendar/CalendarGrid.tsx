import { CalendarTasksArray } from "@/types";
import { CalendarGridProps } from "@/types";
import MonthGrid from "./MonthGrid";
import WeekGrid from "./WeekGrid";
import { useState } from "react";

type CalendarGrid = CalendarGridProps & {
  selectedWeek: number;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  tasks: CalendarTasksArray;
  setTasks: React.Dispatch<React.SetStateAction<CalendarTasksArray>>;
  handleEditClick: (key: string, idx: number) => void;
  handleSaveClick: (newText: string) => void;
  editingTask: {
    key: string;
    idx: number;
    text: string;
  } | null;
};

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
      {calendarType == "month" && (
        <MonthGrid
          year={year}
          month={month}
          days={days}
          setSelectedDate={setSelectedDate}
          tasks={tasks}
          setTasks={setTasks}
          handleEditClick={handleEditClick}
          handleSaveClick={handleSaveClick}
          editingTask={editingTask}
        />
      )}
      {calendarType == "week" && (
        <WeekGrid
          year={year}
          month={month}
          days={days}
          selectedWeek={selectedWeek}
          setSelectedDate={setSelectedDate}
          tasks={tasks}
          setTasks={setTasks}
          handleEditClick={handleEditClick}
          handleSaveClick={handleSaveClick}
          editingTask={editingTask}
        />
      )}
    </>
  );
};

export default CalendarGrid;
