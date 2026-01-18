import { TeacherBoardCard } from "@/features";
import { TeachersBoard } from "@/features/board/types";

export default function ProjectsPage() {
  const TEACHERS_BOARDS: TeachersBoard[] = [
    {
      id: 1,
      name: "ეკოლოგები",
      img_url: "/calendar.png",
    },
    {
      id: 2,
      name: "ფლამინგოები",
      img_url: "/calendar.png",
    },
    {
      id: 3,
      name: "მაძიებლები",
      img_url: "/calendar.png",
    },
    {
      id: 4,
      name: "ფლორისტები",
      img_url: "/teachers/florists.jpg",
    },
    {
      id: 6,
      name: "დისნეი",
      img_url: "/calendar.png",
    },
    {
      id: 7,
      name: "მინიონები",
      img_url: "/calendar.png",
    },
    {
      id: 8,
      name: "ლეგოები",
      img_url: "/calendar.png",
    },
    {
      id: 9,
      name: "ვიტამინები",
      img_url: "/calendar.png",
    },
    {
      id: 10,
      name: "მფრინავები",
      img_url: "/teachers/pilots.png",
    },
    {
      id: 11,
      name: "საერთო",
      img_url: "/calendar.png",
    },
  ];
  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {TEACHERS_BOARDS.map((item) => {
        return (
          <li key={item.id}>
            <TeacherBoardCard name={item.name} img_url={item.img_url} />
          </li>
        );
      })}
    </ul>
  );
}
