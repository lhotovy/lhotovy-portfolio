import profilePicture from "../images/profilePicture.jpg";

export const ProfilePicture = () => {
  return (
    <div className="w-1/5 float-left inline-block">
      <img src={profilePicture} alt="ProfilePicture" className="profilePicture border-stone-600 border-2 mx-auto object-cover rounded-full h-64 w-64 mt-4"/>
    </div>
  );
};


