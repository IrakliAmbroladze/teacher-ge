import BurgerMenuSelect from "@/components/molecules/BurgerMenuSelect";

const CalendarBurgerMenu = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <BurgerMenuSelect value={value} onChange={onChange}>
      <option value="month">თვე</option>
      <option value="week">კვირა</option>
    </BurgerMenuSelect>
  );
};

export default CalendarBurgerMenu;
