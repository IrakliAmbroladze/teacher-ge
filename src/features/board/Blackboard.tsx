"use client";
import { updateBlackboardContent } from "@/lib/supabase/updateBlackboardContent";
import { use, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const Blackboard = ({
  name,
  contentPromise,
}: {
  name: string;
  contentPromise: Promise<{
    data?: string;
    message: string;
    status?: string;
  }>;
}) => {
  const content = use(contentPromise);
  const [text, setText] = useState(content.data);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const debouncedUpdate = useDebouncedCallback((value: string) => {
    updateBlackboardContent(name, value);
  }, 500);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
    debouncedUpdate(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 p-5 flex-1">
      <textarea
        ref={textareaRef}
        className="w-full resize-none overflow-hidden outline-none dark:bg-stone-900 p-2 rounded bg-stone-200"
        value={text ?? ""}
        onChange={(e) => handleChange(e)}
        placeholder="Enter task"
      />
    </div>
  );
};
