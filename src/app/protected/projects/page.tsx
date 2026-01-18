import { TeacherBoardCard } from "@/features";
import { TeachersBoard } from "@/features/board/types";

export default function ProjectsPage() {
  const TEACHERS_BOARDS: TeachersBoard[] = [
    {
      id: 1,
      name: "ეკოლოგები",
      img_url: "/teachers/ecology.png",
    },
    {
      id: 2,
      name: "ფლამინგოები",
      img_url: "/teachers/flamingo.png",
    },
    {
      id: 3,
      name: "მაძიებლები",
      img_url: "/teachers/detective.png",
    },
    {
      id: 4,
      name: "ფლორისტები",
      img_url: "/teachers/florists.jpg",
    },
    {
      id: 5,
      name: "დისნეი",
      img_url: "/teachers/disney.png",
    },
    {
      id: 6,
      name: "მინიონები",
      img_url: "/teachers/minions.png",
    },
    {
      id: 7,
      name: "ლეგოები",
      img_url: "/teachers/lego.png",
    },
    {
      id: 8,
      name: "ვიტამინები",
      img_url: "/teachers/vitamins.png",
    },
    {
      id: 9,
      name: "მფრინავები",
      img_url: "/teachers/pilots.png",
    },
    {
      id: 10,
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
