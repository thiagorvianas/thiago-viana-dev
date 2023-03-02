import { useState } from 'react';
import * as C from './styles';
import useWindowDimensions from '../../utils/UseWindowDimentions';

import { LeftNavSidebar } from '../../components/LeftNavSidebar';
import { ProfessionalInfo } from './Professional';
import { PersonalInfo } from './Personal';
import { HobbiesInfo } from './Hobbies';
import { Contacts } from '../../components/Contacts';

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
      { useWindowDimensions().width < 1023 &&
        <C.Title>
          <p>_about-me</p>
        </C.Title>
      }

      { useWindowDimensions().width >= 1023 &&
        <LeftNavSidebar setContent={ setContent } content={ content } />
      }

      { useWindowDimensions().width < 1023 ?
        <>
          <>
            <ProfessionalInfo />
            <PersonalInfo />
            <HobbiesInfo />
            <Contacts />
          </>
        </> :
        renderContent(content)
      }
    </C.Container>
  );    
};
