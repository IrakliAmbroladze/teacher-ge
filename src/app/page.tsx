import Welcome from "@/components/welcome";
import { JSX } from "react";

export default async function Products(): Promise<JSX.Element> {
  return (
    <div className="w-full max-w-[1110px] mx-auto flex flex-col min-h-screen">
      <Welcome />
    </div>
  );
}
