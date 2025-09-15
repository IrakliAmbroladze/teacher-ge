import { TableHeader, TableBody } from "@/components";

export const WeekPlanCalendar = () => {
  return (
    <>
      <div className="w-fulL text-center text-xl text-black p-2.5 border font-semibold border-black bg-[#88b545]">
        მეორეები
      </div>
      <div className="w-full overflow-auto">
        <div className="w-full min-w-4xl">
          <div className="grid grid-cols-6">
            <TableHeader />
            <TableBody />
          </div>
        </div>
      </div>
    </>
  );
};
