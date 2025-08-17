import { HEADER_HEIGHT } from "@/lib/constants";
import { MenuCarousel } from "@/components";

export default async function ProtectedPage() {
  return (
    <div
      className="flex-1 w-full flex flex-col items-center "
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <MenuCarousel />
    </div>
  );
}
