"use client";
import { Button } from "@/components";
import { useState } from "react";

export const Blackboard = ({ name }: { name: string }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2 p-5">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-stone-400 text-center">
        {name.toUpperCase()}
      </h1>
      <div className="flex justify-center">
        {isEditing ? (
          <div className="flex gap-2">
            <Button
              textContent="save"
              bgColor="#008000"
              handleClick={() => {
                setIsEditing((prev) => !prev);
              }}
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
              setIsEditing((prev) => !prev);
            }}
          />
        )}
      </div>
    </div>
  );
};
