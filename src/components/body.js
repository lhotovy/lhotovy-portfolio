import { ButtonSection } from "./buttonSection";
import { EducationSection } from "./educationSection";
import { JobSection } from "./jobSection";
import { MainBio } from "./mainBio";
import { Pop } from "./popup";

export const Body = () => {
  return (
    <div className="mx-auto flex flex-col justify-center text-zinc-600">
        <MainBio />
        <ButtonSection />
        <Pop /> 
        <EducationSection />
        <JobSection />       
    </div>
  )
}
