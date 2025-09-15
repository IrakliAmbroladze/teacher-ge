import RowCell from "./RowCell";
import { WeekPlanSubject } from "@/types";

export default function Row({ subject }: { subject: WeekPlanSubject }) {
  return (
    <>
      <div className="border text-xl font-semibold  flex w-full overflow-auto justify-center items-center">
        {subject}
      </div>
      {[...Array(5)].map((_, i) => {
        const id =
          subject === "მათემატიკა"
            ? 0
            : subject === "ქართული"
              ? 5
              : subject === "ბუნება"
                ? 10
                : 15;

        return (
          <div key={i} className="border">
            <RowCell id={id + i} />
          </div>
        );
      })}
    </>
  );
}
