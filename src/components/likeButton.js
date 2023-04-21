import { useState, useEffect } from "react";
import Axios from 'axios';

let likesDb;

export const LikeButton = () => {
  
  const [likes, setLikes] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/likes_counter").then((response) => {
      likesDb = response.data[response.data.length-1]["num_of_likes"];
      setLikes(likesDb);
  }, [])});

  const handleClick = () => {
            
      if (isClicked) {
        Axios.post("http://localhost:3001/create", {num_of_likes: likes - 1}).then(() => {
        }).then(() => {
           Axios.get("http://localhost:3001/likes_counter").then((response) => {
              likesDb = response.data[response.data.length-1]["num_of_likes"];
              setLikes(likesDb);
          });
        });     
      } else {
          Axios.post("http://localhost:3001/create", {num_of_likes: likes + 1}).then(() => {          
          }).then(() => {
            Axios.get("http://localhost:3001/likes_counter").then((response) => {
                likesDb = response.data[response.data.length-1]["num_of_likes"];
                setLikes(likesDb);
                });
          });
        };
      setIsClicked(!isClicked);   
    };
  
    return (
      <div className="bg-slate-200 inline-flex mt-6  w-1/8 rounded text-center text-lg md:text-xl">
      <button className={`like-button ${isClicked && 'liked'} p-2 text-center`} onClick={handleClick}>
        <i className={`fa-solid fa-thumbs-up ${isClicked ? 'text-black' : 'text-sky-900'} pr-4}`} />
        <span className={`likes-counter hidden md:inline-block font-medium px-2`}>{ `${isClicked ? 'Unlike' : 'Like'} | ${likes}` }</span>
      </button>
      </div>
    );
  };

