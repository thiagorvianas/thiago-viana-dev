import { Routes, Route } from 'react-router-dom';

import { Hello } from '../pages/Hello'
import { AboutMe } from '../pages/AboutMe';

export function Main() {
  return (
    <Routes>
      <Route path="/" element={ <Hello /> } />
      <Route path="/about-me" element={ <AboutMe /> } />
    </Routes>
  );
}
