import Image from "next/image";
import { TeachersBoard } from "./types";

type TeacherBoardCardProps = Omit<TeachersBoard, "id">;

export const TeacherBoardCard = ({ name, img_url }: TeacherBoardCardProps) => {
  return (
    <div className="p-[20px] w-[150px] h-[200px] flex flex-col items-center rounded-md shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-150 ease-in-out">
      <div className="relative w-full h-full mb-2">
        <Image alt={name} src={img_url} fill className="object-cover rounded" />
      </div>

      <div className="text-center font-medium">{name}</div>
    </div>
  );
};
