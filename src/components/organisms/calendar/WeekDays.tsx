import { geoWeekdaysArray } from "@/constants";

export default function WeekDays() {
  return (
    <>
      {geoWeekdaysArray.map((day) => (
        <div key={day} className="text-sm flex justify-center">
          {day}
        </div>
      ))}
    </>
  );
}
