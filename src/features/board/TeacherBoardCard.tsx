import Image from "next/image";
import { TeachersBoard } from "./types";
import Link from "next/link";

export const TeacherBoardCard = ({
  name,
  img_url,
  url,
}: Omit<TeachersBoard, "id">) => {
  return (
    <Link
      href={url}
      className="p-[20px] w-[150px] h-[200px] flex flex-col items-center rounded-md shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-150 ease-in-out dark:shadow-stone-800/80"
    >
      <div className="relative w-full h-full mb-2">
        <Image alt={name} src={img_url} fill className="object-cover rounded" />
      </div>
      <h2 className="text-center font-medium">{name}</h2>
    </Link>
  );
};
