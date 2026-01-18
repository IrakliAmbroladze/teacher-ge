"use client";
import { Button } from "@/components";
import { use, useState } from "react";

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
  console.log(content);
  const handleSave = () => {
    setIsEditing(false);
  };
  return (
    <div className="flex flex-col gap-2 p-5">
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
          <Button
            textContent="edit"
            bgColor="#27D3F5"
            handleClick={() => {
              setIsEditing(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
