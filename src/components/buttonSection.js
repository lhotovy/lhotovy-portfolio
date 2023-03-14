import { Button } from "./button"

export const ButtonSection = () => {
  return (
    <div className="flex">
        <div className=" flex flex-row container justify-center w-1/2 ">    
            <Button name='Get my CV' address='cv' />
            <Button name='Contact me' address='contact' />
        </div>
    </div>
  )
}
