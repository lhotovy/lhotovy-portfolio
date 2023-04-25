import { ButtonSection } from "./buttonSection";
import { MainBio } from "./mainBio";
import { ProfilePicture } from "./profilePicture";

export const Home = () => {

  return (
    <div className="w-4/5 mx-auto block">    
      <div className="mx-auto mt-32 w-4/5 text-zinc-600 flex justify-center">
          <ProfilePicture />
      </div>
      <div className="mx-auto w-4/5 text-zinc-600 flex justify-center">
          <MainBio />
      </div>
      <div className="mx-auto w-4/5 text-zinc-600 flex justify-center">        
          <ButtonSection />
      </div>
    </div>
  )
}
