import { Button } from "./button";
import cv from "../data/cv.pdf";

export const ButtonSection = () => {
  return (
    <div className="block pb-24">
        <div className="flex pt-16 flex-row mx-auto justify-center w-1/3">    
            <Button name="Get my CV" address={cv} />
            <Button name="Contact me" address="contact" />
        </div>
    </div>
  );
};
