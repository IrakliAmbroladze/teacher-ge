import { TeacherBoardCard } from "@/features";

type TeachersBoard = {
  id?: number;
  name: string;
  img_url: string;
};

export default function ProjectsPage() {
  const TEACHERS_BOARDS: TeachersBoard[] = [
    { id: 1, name: "Irakli", img_url: "url-1" },
    { id: 2, name: "Tikuna", img_url: "second image" },
  ];
  return (
    <>
      <div>This is a projects page</div>
      {TEACHERS_BOARDS.map((item) => {
        return (
          <li key={item.id}>
            <TeacherBoardCard name={item.name} img_url={item.img_url} />
          </li>
        );
      })}
    </>
  );
}
