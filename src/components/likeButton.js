import { useState } from "react";

export const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      if (isClicked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      setIsClicked(!isClicked);
    };
  
    return (
      <div className="bg-slate-200 dark:bg-sky-900 inline-flex mt-4 absolute left-20 h-12 w-1/8 rounded text-center">
      <button className={ `like-button ${isClicked && 'liked'} p-2 text-center` } onClick={handleClick}>
        <i className="fa-solid fa-thumbs-up text-2xl px-2 text-blue-800 dark:text-slate-200" />
        <span className="likes-counter pr-2 dark:text-slate-200">{ `Like my page | ${likes}` }</span>
      </button>
      </div>
    );
  };

