import { TeachersBoard } from "./types";

export const TeacherBoardCard = ({
  name,
  img_url,
}: Omit<TeachersBoard, "id">) => {
  return (
    <>
      <div>{name}</div>
      <div>{img_url}</div>
    </>
  );
};
