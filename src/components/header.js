import { SocialMedia } from "./socialMedia"
import { ToggleButton } from "./toggleButton"
import { LikeButton } from "./likeButton"

export const Header = (props) => {
  return (
    <div className="flex">
        <LikeButton />
        <SocialMedia />
        <ToggleButton onClick={props.onClick} />
    </div>
  )
}
