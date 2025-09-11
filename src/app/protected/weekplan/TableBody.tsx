import React from "react";
import Row from "./Row";
// import { fetchWeekPlanTasks } from "@/utils/server/fetchWeekPlanTasks";

export default async function TableBody() {
  const subjects: Array<"მათემატიკა" | "ქართული" | "ბუნება"> = [
    "მათემატიკა",
    "ქართული",
    "ბუნება",
  ];
  // const weekPlanTasks: Array<{ id: number; text: string | null }> =
  //   await fetchWeekPlanTasks();
  // console.log("weekPlanTasks: ", weekPlanTasks);
  return (
    <>
      {subjects.map((s) => (
        <Row key={s} subject={s} />
      ))}
    </>
  );
}
