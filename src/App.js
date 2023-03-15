//import './App.css';
import { ProfilePicture } from './components/profilePicture';
import { Header } from './components/header';
import { Body } from './components/body';
import { useEffect, useState } from 'react';

export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app object-cover w-full ${theme}`}>
      <Header onClick={toggleTheme} />
      <ProfilePicture />
      <Body />
    </div>
  )
}


