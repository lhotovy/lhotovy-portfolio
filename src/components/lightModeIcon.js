export const LightModeIcon = (props) => {
  return (
    <div className="text-xl md:text-3xl">   
        <i onClick={props.onClick} className="fa-solid fa-moon pt-8 text-sky-800" />
    </div>
  )
}
