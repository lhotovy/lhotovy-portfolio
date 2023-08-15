import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { EducationSection } from './components/educationSection';
import { JobSection } from './components/jobSection';
import { Home } from './components/home';
import { Skills } from './components/skills';
import { Header } from './components/header';
import { SideBar } from './components/sideNav';
import React from 'react';
import { Projects } from './components/projects';

export const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    
    <div className={`app md:flex md:flex-col bg-light-bg dark:bg-dark-bg object-contain bg-no-repeat min-h-screen ${theme} h-vw w-vw`}>
      <SideBar />
      <Header onClick={toggleTheme} theme={theme} />            
    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/education' element={<EducationSection />} />
        <Route path='/job' element={<JobSection />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
  </div>
  )
}