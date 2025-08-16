"use client";
import { useState } from "react";
import TaskModal from "../TaskModal";
import * as utils from "../../../features/calendar/utils";
import type { Task } from "../../../features/calendar/type";
import { useHandleClick } from "@/hooks";
import CalendarHeader from "./CalendarHeader";
import type { EditingTask } from "@/types";
import CalendarGrid from "./CalendarGrid";
import { daysArrayOfMonth, weeksNumberInMonth } from "@/utils";
import { currentMonth, currentYear } from "@/constants";

export default function Calendar({ calendarTasks }: { calendarTasks: Task }) {
  const [editingTask, setEditingTask] = useState<EditingTask | null>(null);
  const [month, setMonth] = useState<number>(currentMonth);
  const [year, setYear] = useState<number>(currentYear);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task>(calendarTasks);
  const [selectedWeek, setSelectedWeek] = useState<number>(utils.currentWeek);

  console.log(year, month, selectedWeek);

  const { handleEditClick, handleSaveClick, handleAdd } = useHandleClick({
    tasks,
    setEditingTask,
    editingTask,
    setTasks,
    setSelectedDate,
  });

  return (
    <div className="w-full px-2.5">
      <CalendarHeader
        year={year}
        month={month}
        selectedWeek={selectedWeek}
        setSelectedWeek={setSelectedWeek}
        weeks={weeksNumberInMonth(year, month)}
        setYear={setYear}
        setMonth={setMonth}
      />
      <CalendarGrid
        year={year}
        month={month}
        days={daysArrayOfMonth(year, month)}
        selectedWeek={selectedWeek}
        setSelectedDate={setSelectedDate}
        tasks={tasks}
        setTasks={setTasks}
        handleEditClick={handleEditClick}
        handleSaveClick={handleSaveClick}
        editingTask={editingTask}
      />

      {selectedDate && (
        <TaskModal
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
