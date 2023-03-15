import profilePicture from "../images/profilePicture.jpg";

export const ProfilePicture = () => {
  return (
    <div className="dark:bg-slate-800">
      <img src={profilePicture} alt="ProfilePicture" className="profilePicture mx-auto object-cover rounded-full h-64 w-64 mt-20"/>
    </div>
  );
};


