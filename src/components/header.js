import { NavBar } from "./navBar";
import { ToggleButton } from "./toggleButton";

export const Header = () => {
  return (
    <section className="bg-slate-200 h-16 w-2/3 justify-center sticky m-auto flex rounded-b-3xl">
        <NavBar />
        <ToggleButton />
    </section>
  )
}
