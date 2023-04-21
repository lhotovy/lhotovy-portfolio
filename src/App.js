import { useEffect, useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Routes, Route } from 'react-router-dom';
import { EducationSection } from './components/educationSection';
import { JobSection } from './components/jobSection';
import { Home } from './components/home';
import { Skills } from './components/skills';
import { Header } from './components/header';


export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app bg-light-bg dark:bg-dark-bg object-cover bg-no-repeat min-h-screen w-full ${theme}`}>
      <Sidebar />
      <Header onClick={toggleTheme} theme={theme} />            
     
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


