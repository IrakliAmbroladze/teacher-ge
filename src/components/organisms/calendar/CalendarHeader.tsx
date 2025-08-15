import { months } from "@/features/calendar/utils";

const CalendarHeader = ({
  year,
  month,
  selectedWeek,
  setSelectedWeek,
  weeks,
  setYear,
  setMonth,
}: {
  year: number;
  month: number;
  selectedWeek: number;
  setSelectedWeek: React.Dispatch<React.SetStateAction<number>>;
  weeks: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex mb-4 justify-between">
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        className="border px-2 w-24"
      />
      <select
        value={month}
        onChange={(e) => setMonth(Number(e.target.value))}
        className="px-2 text-black bg-gray-100"
      >
        {months.map((m, index) => (
          <option key={index} value={index}>
            {m}
          </option>
        ))}
      </select>
      <select
        value={selectedWeek}
        onChange={(e) => setSelectedWeek(Number(e.target.value))}
        className="px-2 lg:hidden text-black bg-gray-100"
      >
        {Array.from({ length: weeks }, (_, idx) => (
          <option key={idx} value={idx + 1}>
            კვირა {idx + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CalendarHeader;
