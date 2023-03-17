import { useEffect, useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Routes, Route } from 'react-router-dom';
import { EducationSection } from './components/educationSection';
import { JobSection } from './components/jobSection';
import { Home } from './components/home';
import { ToggleButton } from './components/toggleButton';
import { Skills } from './components/skills';

export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app dark:bg-slate-800 object-cover w-full ${theme}`}>
      <Sidebar />
      <ToggleButton onClick={toggleTheme} />
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


