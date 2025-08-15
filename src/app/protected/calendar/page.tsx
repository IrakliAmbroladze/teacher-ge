import Calendar from "@/components/organisms/calendar/Calendar";
import { getCalendarTasks } from "@/lib";
import { HEADER_HEIGHT } from "@/lib/constants";
import React from "react";

const CalendarPage = async () => {
  const calendarTasks = await getCalendarTasks();
  return (
    <div
      style={{
        marginTop: HEADER_HEIGHT,
      }}
    >
      <Calendar calendarTasks={calendarTasks} />
    </div>
  );
};

export default CalendarPage;
