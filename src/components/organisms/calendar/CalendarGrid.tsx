import { Task } from "@/features/calendar/type";
import { CalendarGridProps } from "@/types";
import MonthGrid from "./MonthGrid";
import WeekGrid from "./WeekGrid";

type CalendarGrid = CalendarGridProps & {
  selectedWeek: number;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  tasks: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task>>;
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
  return (
    <>
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
    </>
  );
};

export default CalendarGrid;
