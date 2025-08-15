import * as utils from "../../../features/calendar/utils";
import { CalendarGridProps } from "@/types";
import DayGrid from "./DayGrid";
import { Task } from "@/features/calendar/type";

const renderWeekdays = () => (
  <>
    {utils.weekdays.map((d) => (
      <div key={d} className="font-bold hidden lg:block">
        {d}
      </div>
    ))}
  </>
);
type MonthGridProps = CalendarGridProps & {
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

const MonthGrid = ({
  year,
  month,
  days,
  setSelectedDate,
  tasks,
  setTasks,
  handleEditClick,
  handleSaveClick,
  editingTask,
}: MonthGridProps) => {
  const emptyDays = Array.from(
    { length: utils.dayOfWeekOfFirstDayOfMonth(year, month) },
    (_, i) => <div key={`empty-${i}`} />
  );
  return (
    <div className="lg:grid gap-1 lg:grid-cols-7 hidden">
      {renderWeekdays()}
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
    </div>
  );
};

export default MonthGrid;
