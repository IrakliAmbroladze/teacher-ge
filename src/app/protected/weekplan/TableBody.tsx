import React from "react";
import Row from "./Row";

export default async function TableBody() {
  const subjects: Array<"მათემატიკა" | "ქართული" | "ბუნება" | "წიგნიერება"> = [
    "მათემატიკა",
    "ქართული",
    "ბუნება",
    "წიგნიერება",
  ];
  return (
    <>
      {subjects.map((s) => (
        <Row key={s} subject={s} />
      ))}
    </>
  );
}
