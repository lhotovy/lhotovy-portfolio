import { useEffect, useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Routes, Route } from 'react-router-dom';
import { EducationSection } from './components/educationSection';
import { JobSection } from './components/jobSection';
import { Home } from './components/home';
import { Skills } from './components/skills';
import { Header } from './components/header';
import { LikeButton } from './components/likeButton';

export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app bg-light-bg dark:bg-dark-bg object-cover bg-no-repeat w-full ${theme}`}>
      <Sidebar />
      <Header onClick={toggleTheme} />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/education' element={<EducationSection />} />
        <Route path='/job' element={<JobSection />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  )
}


