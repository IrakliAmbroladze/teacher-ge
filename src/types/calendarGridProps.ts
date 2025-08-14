import { JSX } from "react";

export interface CalendarGridProps {
  year: number;
  month: number;
  days: Date[];
  renderDay: (date: Date) => JSX.Element;
}
