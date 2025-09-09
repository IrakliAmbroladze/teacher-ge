import Calendar from "@/components/organisms/calendar/Calendar";
import { getCalendarTasks } from "@/lib";

const CalendarPage = async () => {
  const calendarTasks = await getCalendarTasks();
  return (
    <div className="bg-[#374159]">
      <Calendar calendarTasks={calendarTasks} />
    </div>
  );
};

export default CalendarPage;
