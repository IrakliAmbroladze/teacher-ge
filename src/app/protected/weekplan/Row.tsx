import React from "react";
import RowCell from "./RowCell";

export default function Row({
  subject,
}: {
  subject: "მათემატიკა" | "ქართული" | "ბუნება";
}) {
  return (
    <>
      <div className="border min-h-[100px] text-xl font-semibold  flex w-full overflow-auto justify-center items-center">
        {subject}
      </div>
      {[...Array(5)].map((_, i) => {
        const id =
          subject === "მათემატიკა" ? 0 : subject === "ქართული" ? 5 : 10;

        return (
          <div key={i} className="border">
            <RowCell id={id + i} />
          </div>
        );
      })}
    </>
  );
}
