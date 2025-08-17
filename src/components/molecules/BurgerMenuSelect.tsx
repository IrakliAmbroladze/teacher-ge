import { Menu } from "lucide-react";

const BurgerMenuSelect = ({
  value,

  onChange,
  children,
}: {
  value: string;
  onChange: (string: string) => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {children}
      </select>

      <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded cursor-pointer">
        <Menu className="text-black" />
      </div>
    </div>
  );
};

export default BurgerMenuSelect;
