export const TeacherBoardCard = ({
  name,
  img_url,
}: {
  name: string;
  img_url: string;
}) => {
  return (
    <>
      <div>{name}</div>
      <div>{img_url}</div>
    </>
  );
};
