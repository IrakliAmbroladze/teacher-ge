import { HEADER_HEIGHT } from "@/lib/constants";
import { MenuCarousel, UserHomePageTitle } from "@/components";

export default async function ProtectedPage() {
  return (
    <div
      className="flex-1 w-full flex flex-col items-center "
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <UserHomePageTitle />
      <MenuCarousel />
    </div>
  );
}
