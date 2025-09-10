import React from "react";
import Row from "./Row";

export default function TableBody() {
  const subjects: Array<"მათემატიკა" | "ქართული" | "ბუნება"> = [
    "მათემატიკა",
    "ქართული",
    "ბუნება",
  ];
  return (
    <>
      {subjects.map((s) => (
        <Row key={s} subject={s} />
      ))}
    </>
  );
}
