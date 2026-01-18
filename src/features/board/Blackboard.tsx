"use client";
import { Button } from "@/components";

export const Blackboard = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col gap-2 p-5 h-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-stone-400 text-center">
        {name.toUpperCase()}
      </h1>
      <div className="flex justify-center">
        <Button
          textContent="edit"
          bgColor="#27D3F5"
          handleClick={() => {
            console.log("hi");
          }}
        />
      </div>
    </div>
  );
};
