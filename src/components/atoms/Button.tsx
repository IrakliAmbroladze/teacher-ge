type Button = {
  textContent: string;
  bgColor: string;
  handleClick: () => void;
};
export const Button = ({ textContent, bgColor, handleClick }: Button) => {
  return (
    <button
      className="gap-x-1.5 p-2 px-4 rounded-md text-white text-xs font-bold cursor-pointer active:scale-95"
      style={{
        backgroundColor: bgColor,
      }}
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
};
