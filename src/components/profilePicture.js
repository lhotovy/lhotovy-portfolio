import profilePicture from "../images/profilePicture.jpg";

export const ProfilePicture = () => {
  return (
    <div className="w-full float-left inline-block">
      <img src={profilePicture} alt="ProfilePicture" className="profilePicture border-stone-600 border-2 mx-auto object-cover rounded-full h-32 w-32 md:h-48 md:w-48 mt-4"/>
    </div>
  );
};


