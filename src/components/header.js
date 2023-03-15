import { NavBar } from "./navBar";
import { ToggleButton } from "./toggleButton";

export const Header = (props) => {
  return (
    <section className="bg-slate-200 h-16 w-1/2 justify-center sticky m-auto flex rounded-b-3xl dark:bg-slate-800">
        <NavBar />
        <ToggleButton onClick={props.onClick} />
    </section>
  )
}
