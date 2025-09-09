import Calendar from "@/components/organisms/calendar/Calendar";
import { getCalendarTasks } from "@/lib";

const CalendarPage = async () => {
  const calendarTasks = await getCalendarTasks();
  return (
    <div>
      <Calendar calendarTasks={calendarTasks} />
    </div>
  );
};

export default CalendarPage;
