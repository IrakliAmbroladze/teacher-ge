export const Blackboard = ({ name }: { name: string }) => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-stone-400 text-center">
        {name.toUpperCase()}
      </h1>
    </>
  );
};
