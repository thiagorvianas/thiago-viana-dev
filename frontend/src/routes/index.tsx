import { Routes, Route } from 'react-router-dom';
import { Hello } from '../pages/Hello'

export function Main() {
  return (
    <Routes>
      <Route path="/" element={ <Hello /> } />
    </Routes>
  );
}
