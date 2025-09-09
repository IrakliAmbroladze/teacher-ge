import { HEADER_HEIGHT } from "@/lib/constants";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-dvh bg-[#374159]"
      style={{ height: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
    >
      {children}
    </div>
  );
}
