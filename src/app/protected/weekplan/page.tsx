import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function WeekPlanPage() {
  return (
    <>
      <div className="w-fulL text-center text-xl text-black p-5 border font-semibold border-black bg-[#88b545]">
        მეორეები
      </div>
      <div className="w-full overflow-auto">
        <div className="w-full h-[500px] min-w-4xl">
          <div className="grid grid-cols-6">
            <TableHeader />
            <TableBody />
          </div>
        </div>
      </div>
    </>
  );
}
