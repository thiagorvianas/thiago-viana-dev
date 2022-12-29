import { useState } from 'react';
import * as C from './styles';

import { LeftNavSidebar } from '../../components/LeftNavSidebar';
import { ProfessionalInfo } from './Professional';
import { PersonalInfo } from './Personal';
import { HobbiesInfo } from './Hobbies';

export const AboutMe = () => {
  const [content, setContent] = useState('professional');
  
  const renderContent = (string: string) => {
    switch (string) {
      case 'professional':
        return <ProfessionalInfo />
    case 'personal':
        return <PersonalInfo />
    case 'hobbies':
        return <HobbiesInfo />
      default:
        break;
    }
  }

  return(
    <C.Container>
      <LeftNavSidebar setContent={ setContent } content={ content } />
      
      { renderContent(content) }
    </C.Container>
  );    
};
