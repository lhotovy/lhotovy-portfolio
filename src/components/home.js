import { ButtonSection } from "./buttonSection";
import { MainBio } from "./mainBio";
import { ProfilePicture } from "./profilePicture";

export const Home = () => {

  return (
    <div className="mx-auto pt-60 min-h-screen w-2/3 text-zinc-600 dark:bg-slate-800">
        <ProfilePicture />
        <MainBio />
        <ButtonSection />
    </div>
  )
}
