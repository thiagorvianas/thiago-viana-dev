import { Routes, Route } from 'react-router-dom';

import { Hello } from '../pages/Hello'
import { AboutMe } from '../pages/AboutMe';
import { Projects } from '../pages/Projects';
import { ContactMe } from '../pages/ContactMe';

export function Main() {
  return (
    <Routes>
      <Route path="/" element={ <Hello /> } />
      <Route path="/about-me" element={ <AboutMe /> } />
      <Route path="/projects" element={ <Projects /> } />
      <Route path="/contact-me" element={ <ContactMe /> } />
    </Routes>
  );
}
