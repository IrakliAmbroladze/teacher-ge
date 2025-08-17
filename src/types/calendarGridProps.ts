import { CalendarTasksArray } from "@/types";

export interface CalendarGridProps {
  year: number;
  month: number;
  days: Date[];
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
}
