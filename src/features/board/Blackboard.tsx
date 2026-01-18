"use client";
import { Button } from "@/components";
import { use, useEffect, useRef, useState } from "react";

export const Blackboard = ({
  contentPromise,
}: {
  contentPromise: Promise<{
    data?: string;
    message: string;
    status?: string;
  }>;
}) => {
  const content = use(contentPromise);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState(content.data);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  const handleSave = () => {
    setIsEditing(false);
  };
  return (
    <div className="flex flex-col gap-2 p-5 flex-1">
      <div className="flex justify-center">
        {isEditing ? (
          <div className="flex gap-2">
            <Button
              textContent="save"
              bgColor="#008000"
              handleClick={handleSave}
            />
            <Button
              textContent="cancel"
              bgColor="#C0C0C0"
              handleClick={() => {
                setIsEditing((prev) => !prev);
              }}
            />
          </div>
        ) : (
          <>
            <Button
              textContent="edit"
              bgColor="#27D3F5"
              handleClick={() => {
                setIsEditing(true);
              }}
            />
          </>
        )}
      </div>
      {isEditing ? (
        <textarea
          ref={textareaRef}
          className="w-full flex-1 p-1 border rounded resize-none overflow-hidden"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};
