import { SocialMedia } from "./socialMedia"
import { ToggleButton } from "./toggleButton"


export const Header = (props) => {
  return (
    <div className="flex justify-around px-16 h-16 w-2/3 mx-auto"> 
        <SocialMedia />
        <ToggleButton onClick={props.onClick} theme={props.theme} />
    </div>
  )
}
