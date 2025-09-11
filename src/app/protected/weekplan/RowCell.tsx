// "use client";
// import React, { use, useEffect, useState } from "react";
import { fetchWeekPlanTask } from "@/utils";
import TextArea from "./TextArea";

export default async function RowCell({ id }: { id: number }) {
  const data = await fetchWeekPlanTask(id);
  console.log(data);

  return <TextArea id={id} text={data && data[0] ? data[0].text : ""} />;
}
