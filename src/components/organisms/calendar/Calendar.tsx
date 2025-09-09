"use client";
import { useState } from "react";
import TaskModal from "../TaskModal";
import type { CalendarTasksArray } from "@/types";
import { useHandleClick } from "@/hooks";
import CalendarHeader from "./CalendarHeader";
import type { EditingTask } from "@/types";
import CalendarGrid from "./CalendarGrid";
import { currentWeek, daysArrayOfMonth, weeksNumberInMonth } from "@/utils";
import { currentMonth, currentYear } from "@/constants";

export default function Calendar({
  calendarTasks,
}: {
  calendarTasks: CalendarTasksArray;
}) {
  const [editingTask, setEditingTask] = useState<EditingTask | null>(null);
  const [month, setMonth] = useState<number>(currentMonth);
  const [year, setYear] = useState<number>(currentYear);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<CalendarTasksArray>(calendarTasks);
  const [selectedWeek, setSelectedWeek] = useState<number>(currentWeek);

  const { handleEditClick, handleSaveClick, handleAdd } = useHandleClick({
    tasks,
    setEditingTask,
    editingTask,
    setTasks,
    setSelectedDate,
  });

  return (
    <div className="w-full px-2.5 text-white bg-[#374159]">
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
