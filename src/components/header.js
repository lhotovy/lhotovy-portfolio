import { LikeButton } from "./likeButton"
import { SocialMedia } from "./socialMedia"
import { ToggleButton } from "./toggleButton"


export const Header = (props) => {
  return (
    <div className="flex justify-around px-16">
        <LikeButton />
        <SocialMedia />
        <ToggleButton onClick={props.onClick} theme={props.theme} />
    </div>
  )
}
