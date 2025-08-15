"use client";
import { useState, useEffect } from "react";
import TaskModal from "../TaskModal";
import { createClient } from "@/utils/supabase/client";
import { createCalendarTask } from "../../../features/calendar/create-calendar-task";
import * as utils from "../../../features/calendar/utils";
import type { Task } from "../../../features/calendar/type";
import MonthGrid from "./MonthGrid";
import WeekGrid from "./WeekGrid";
import { addTask } from "@/utils";
import { useCalendar, useHandleClick } from "@/hooks";

export default function Calendar() {
  const supabase = createClient();
  useEffect(() => {
    async function loadTasks() {
      const { data, error } = await supabase.from("calendar_tasks").select("*");

      if (error) {
        console.error("Error fetching tasks:", error);
      } else {
        const grouped: typeof tasks = {};
        data.forEach(({ date_key, task_text, checked }) => {
          if (!grouped[date_key]) grouped[date_key] = [];
          grouped[date_key].push({ text: task_text, checked });
        });
        setTasks(grouped);
      }
    }

    loadTasks();
  }, [supabase]);

  const [editingTask, setEditingTask] = useState<{
    key: string;
    idx: number;
    text: string;
  } | null>(null);
  // const [updatedTaskText, setUpdatedTaskText] = useState<string>("");
  // const [isEditing, setIsEditing] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(utils.currentMonth);
  const [year, setYear] = useState<number>(utils.currentYear);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task>({});
  const [selectedWeek, setSelectedWeek] = useState<number>(utils.currentWeek);
  const { days, weeks } = useCalendar(
    year,
    month,
    utils.daysInMonth,
    utils.dayOfWeekOfFirstDayOfMonth
  );

  const { handleEditClick, handleSaveClick } = useHandleClick({
    tasks,
    setEditingTask,
    editingTask,
    setTasks,
  });

  return (
    <div className="w-full px-2.5">
      <div className="flex mb-4 justify-between">
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="border px-2 w-24"
        />
        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="px-2 text-black bg-gray-100"
        >
          {utils.months.map((m, index) => (
            <option key={index} value={index}>
              {m}
            </option>
          ))}
        </select>
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(Number(e.target.value))}
          className="px-2 lg:hidden text-black bg-gray-100"
        >
          {Array.from({ length: weeks }, (_, idx) => (
            <option key={idx} value={idx + 1}>
              კვირა {idx + 1}
            </option>
          ))}
        </select>
      </div>

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

      {selectedDate && (
        <TaskModal
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          onAdd={(text) => {
            addTask(
              selectedDate,
              text,
              utils.getDateKey,
              createCalendarTask,
              setTasks
            );
            setSelectedDate(null);
          }}
        />
      )}
    </div>
  );
}
