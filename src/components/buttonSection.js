import { Button } from "./button";
import cv from "../data/cv.pdf";

export const ButtonSection = () => {
  return (
    <div className="block">
        <div className="flex mt-8 flex-row justify-center mx-auto w-1/3 font-mono">    
            <Button name="GET MY CV" address={cv} />
            <Button name="CONTACT ME" address="contact" />
        </div>
    </div>
  );
};
