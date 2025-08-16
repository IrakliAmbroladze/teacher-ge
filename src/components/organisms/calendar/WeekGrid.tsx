import { CalendarTasksArray } from "@/types";
import { dayOfWeekOfFirstDayOfMonth } from "@/utils";
import { CalendarGridProps } from "@/types";
import DayGrid from "./DayGrid";

type WeekGridType = CalendarGridProps & {
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

const WeekGrid = ({
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
}: WeekGridType) => {
  const filtered = days.filter((date) => {
    const dayIndex =
      date.getDate() + dayOfWeekOfFirstDayOfMonth(year, month) - 1;
    const week = Math.floor(dayIndex / 7) + 1;
    return week === selectedWeek;
  });
  return (
    <div className="grid grid-cols-1 gap-1">
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
    </div>
  );
};

export default WeekGrid;
