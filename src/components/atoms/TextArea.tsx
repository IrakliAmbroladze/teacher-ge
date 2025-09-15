"use client";
import { updateWeekPlanTask } from "@/utils/server/updateWeekPlanTask";
import React, { useState, useRef, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export function TextArea({ id, text }: { id: number; text: string }) {
  const [areaText, setAreaText] = useState<string>(text);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const debouncedUpdate = useDebouncedCallback((value: string) => {
    updateWeekPlanTask(id, value);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setAreaText(e.target.value);
    debouncedUpdate(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [areaText]);

  return (
    <textarea
      ref={textAreaRef}
      value={areaText ?? ""}
      onChange={(e) => handleChange(e)}
      className="w-full resize-none overflow-hidden outline-none"
    />
  );
}
