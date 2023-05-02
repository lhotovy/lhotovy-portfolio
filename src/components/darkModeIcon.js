export const DarkModeIcon = (props) => {
  return (
    <div className="text-xl md:text-3xl" >            
        <i onClick={props.onClick} className="fa-regular fa-sun cursor-pointer text-yellow-500 pt-8" />
    </div>
  )
}
