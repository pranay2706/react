type profileProps = {
  name?: string;
};
function Profile({ name = "good" }: profileProps) {
  const avatar: string = "https://i.imgur.com/7vQD0fPs.jpg";
  const description: string = "Gregorio Y. Zara";
  return (
    <>
      <img className="avatar" src={avatar} alt={description} />
      <p>{name}</p>
    </>
  );
}

export default Profile;
