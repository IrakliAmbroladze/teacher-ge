import { TeacherBoardCard } from "@/features";
import { TeachersBoard } from "@/features/board/types";

export default function ProjectsPage() {
  const TEACHERS_BOARDS: TeachersBoard[] = [
    {
      id: 1,
      name: "ეკოლოგები",
      img_url: "/teachers/ecology.png",
      url: "/protected/projects/ecologies",
    },
    {
      id: 2,
      name: "ფლამინგოები",
      img_url: "/teachers/flamingo.png",
      url: "/protected/projects/flamingos",
    },
    {
      id: 3,
      name: "მაძიებლები",
      img_url: "/teachers/detective.png",
      url: "/protected/projects/explorers",
    },
    {
      id: 4,
      name: "ფლორისტები",
      img_url: "/teachers/florists.jpg",
      url: "/protected/projects/florists",
    },
    {
      id: 5,
      name: "დისნეი",
      img_url: "/teachers/disney.png",
      url: "/protected/projects/disney",
    },
    {
      id: 6,
      name: "მინიონები",
      img_url: "/teachers/minions.png",
      url: "/protected/projects/minions",
    },
    {
      id: 7,
      name: "ლეგოები",
      img_url: "/teachers/lego.png",
      url: "/protected/projects/lego",
    },
    {
      id: 8,
      name: "ვიტამინები",
      img_url: "/teachers/vitamins.png",
      url: "/protected/projects/vitamins",
    },
    {
      id: 9,
      name: "მფრინავები",
      img_url: "/teachers/pilots.png",
      url: "/protected/projects/pilots",
    },
    {
      id: 10,
      name: "საერთო",
      img_url: "/calendar.png",
      url: "/protected/projects/common",
    },
  ];
  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {TEACHERS_BOARDS.map((item) => {
        return (
          <li key={item.id}>
            <TeacherBoardCard
              name={item.name}
              img_url={item.img_url}
              url={item.url}
            />
          </li>
        );
      })}
    </ul>
  );
}
