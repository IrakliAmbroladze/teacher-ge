"use client";
import { updateWeekPlanTask } from "@/utils/server/updateWeekPlanTask";
import React, { useState } from "react";

export default function TextArea({ id, text }: { id: number; text: string }) {
  const [areaText, setAreaText] = useState<string>(text);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setAreaText(e.target.value);
    updateWeekPlanTask(id, e.target.value);
  };
  return <textarea value={areaText ?? ""} onChange={(e) => handleChange(e)} />;
}
