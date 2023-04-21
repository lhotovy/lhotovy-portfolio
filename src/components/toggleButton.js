import { DarkModeIcon } from "./darkModeIcon";
import { LightModeIcon } from "./lightModeIcon";

export const ToggleButton = (props) => {
  let button;
  if (props.theme === "light") {
      button = <LightModeIcon onClick={props.onClick} />   
  } else {
      button = <DarkModeIcon onClick={props.onClick} />
  }

  return button;
};