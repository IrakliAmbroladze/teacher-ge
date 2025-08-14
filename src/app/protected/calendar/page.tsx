import Calendar from "@/components/organisms/calendar/Calendar";
import { HEADER_HEIGHT } from "@/lib/constants";
import React from "react";

const CalendarPage = () => {
  return (
    <div
      style={{
        marginTop: HEADER_HEIGHT,
      }}
    >
      <Calendar />
    </div>
  );
};

export default CalendarPage;
