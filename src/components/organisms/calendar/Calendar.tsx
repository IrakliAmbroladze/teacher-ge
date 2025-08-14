"use client";
import { useState, useEffect, useRef } from "react";
import TaskModal from "../TaskModal";
import { MdAddTask } from "react-icons/md";
import { createClient } from "@/utils/supabase/client";
import { createCalendarTask } from "../../../features/calendar/create-calendar-task";
import * as utils from "../../../features/calendar/utils";
import type { Task } from "../../../features/calendar/type";
import MonthGrid from "./MonthGrid";
import WeekGrid from "./WeekGrid";
import { addTask, toggleTask } from "@/utils";
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

  const TaskInput = ({
    initialText,
    onSave,
  }: {
    initialText: string;
    onSave: (text: string) => void;
  }) => {
    const [text, setText] = useState(initialText);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // Resize textarea on input
    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto"; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on content
      }
    }, [text]);

    return (
      <>
        <textarea
          ref={textareaRef}
          className="w-full p-1 border rounded resize-none overflow-hidden"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={() => onSave(text)} className="border mt-1 px-2 py-1">
          Save
        </button>
      </>
    );
  };

  const renderDay = (date: Date) => {
    const key = utils.getDateKey(date);

    return (
      <div key={key} className="border p-2">
        <div
          onClick={() => setSelectedDate(date)}
          className="cursor-pointer font-bold flex justify-between pb-2.5"
        >
          <div className="flex gap-5">
            {date.getDate()}
            <span className="lg:hidden">
              {date.toLocaleString("en-US", { weekday: "short" })}
            </span>
          </div>
          <MdAddTask />
        </div>
        <div className="flex flex-col gap-2">
          {(tasks[key] || []).map((task, index) => {
            return (
              <div
                key={`${key}-${index}`}
                className="flex justify-between gap-1 w-full break-words border-b"
              >
                <label
                  className={`whitespace-normal break-words cursor-pointer flex gap-1 ${
                    task.checked && "text-green-600"
                  }`}
                  style={{ overflowWrap: "anywhere" }}
                >
                  <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => toggleTask(tasks, key, index, setTasks)}
                    className="mt-0.5"
                  />
                </label>
                {editingTask?.key === key && editingTask?.idx === index ? (
                  <TaskInput
                    initialText={editingTask.text}
                    onSave={(newText) => {
                      handleSaveClick(newText);
                    }}
                  />
                ) : (
                  <>
                    <span
                      className={`break-words whitespace-pre-wrap w-full overflow-wrap-anywhere ${
                        task.checked && "text-green-600"
                      }`}
                    >
                      {task.text}
                    </span>
                    <button onClick={() => handleEditClick(key, index)}>
                      edit
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

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

      <MonthGrid year={year} month={month} days={days} renderDay={renderDay} />
      <WeekGrid
        year={year}
        month={month}
        days={days}
        renderDay={renderDay}
        selectedWeek={selectedWeek}
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
