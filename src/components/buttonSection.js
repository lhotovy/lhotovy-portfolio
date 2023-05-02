import { Button } from "./button";
import cv from "../data/cv.pdf";

export const ButtonSection = () => {
  return (
    <div className="flex-block">
        <div className="flex mt-4 flex-row justify-between gap-7 w-full font-mono">    
            <Button name="GET MY CV" address={cv} />
            <Button name="CONTACT ME" address="mailto:lukas.hotovy91@gmail.com" />
        </div>
    </div>
  );
};
