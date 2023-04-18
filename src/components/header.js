import { LikeButton } from "./likeButton"
import { SocialMedia } from "./socialMedia"
import { ToggleButton } from "./toggleButton"


export const Header = (props) => {
  return (
    <div className="flex">
        <LikeButton />
        <SocialMedia />
        <ToggleButton onClick={props.onClick} />
    </div>
  )
}
