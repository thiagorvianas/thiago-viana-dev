import { useEffect } from 'react';
import { PresentationHome } from '../../components/PresentationHome';

export const Hello = () => {
  useEffect(() => {
    document.title = 'Thiago Viana Dev | Home';
  }, []);

  return (
    <PresentationHome />
  );
}
