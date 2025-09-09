"use client";

import { CalendarTasksArray } from "@/types";
import { getDateKey } from "@/utils";
import { MdAddTask } from "react-icons/md";
import { toggleTask } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { georgianWeekdays } from "@/constants";

type DayGridProps = {
  date: Date;
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
  calendarType: "month" | "week";
};

const DayGrid = ({
  date,
  setSelectedDate,
  tasks,
  setTasks,
  handleEditClick,
  handleSaveClick,
  editingTask,
  calendarType,
}: DayGridProps) => {
  const key = getDateKey(date);

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

  const englishWeekday = date.toLocaleString("en-US", { weekday: "short" });
  const georgianWeekday = georgianWeekdays[englishWeekday];

  return (
    <div key={key} className="border p-0.5 overflow-auto">
      <div
        onClick={() => setSelectedDate(date)}
        className="cursor-pointer font-bold flex justify-between pb-2.5"
      >
        <div className="flex gap-0.5 text-xs">
          {date.getDate()}
          <span>{georgianWeekday}</span>
        </div>
        <MdAddTask />
      </div>
      <div className="flex flex-col gap-2 overflow-auto text-xs">
        {(tasks[key] || []).map((task, index) => {
          return (
            <div
              key={`${key}-${index}`}
              className="flex justify-between gap-1 w-full break-words border-b  overflow-auto"
            >
              <label
                className={`whitespace-normal break-words cursor-pointer flex gap-1 ${
                  task.checked && "text-green-600"
                } ${calendarType == "month" && "hidden"}`}
                style={{ overflowWrap: "anywhere" }}
              >
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => toggleTask(tasks, key, index, setTasks)}
                  className={`mt-0.5 ${calendarType == "month" && "hidden"}`}
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
                  {calendarType == "month" ? (
                    <span
                      className={`text-xs w-full ${
                        task.checked && "text-green-600"
                      }`}
                    >
                      {task.text.length > 10
                        ? `${task.text.slice(0, 10)}...`
                        : task.text}
                    </span>
                  ) : (
                    <span
                      className={`break-words whitespace-pre-wrap w-full overflow-wrap-anywhere ${
                        task.checked && "text-green-600"
                      }`}
                    >
                      {task.text}
                    </span>
                  )}

                  <button
                    onClick={() => handleEditClick(key, index)}
                    className={`${calendarType == "month" && "hidden"}`}
                  >
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

export default DayGrid;
