// config/navigation.ts
export type NavigationItem = {
  title: string;
  pageDestination: string;
  className?: string;
  icon?: string;
  isButton?: boolean;
  bgColor?: string;
};

export const navigationConfig: NavigationItem[] = [
  {
    title: "new",
    pageDestination: "/protected/create-task",
    isButton: true,
    bgColor: "#282f40",
  },
  {
    title: "911",
    pageDestination: "/protected/contacts",
    isButton: true,
    bgColor: "#913013",
  },
];

// Optional: Logo configuration
export const logoConfig = {
  src: "/logoTodo.jpg",
  alt: "Logo",
  href: "/",
};
