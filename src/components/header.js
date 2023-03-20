import { SocialMedia } from "./socialMedia"
import { ToggleButton } from "./toggleButton"

export const Header = (props) => {
  return (
    <div className="flex">
        <SocialMedia />
        <ToggleButton onClick={props.onClick} />
    </div>
  )
}
