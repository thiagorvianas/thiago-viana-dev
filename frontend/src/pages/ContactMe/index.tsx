import * as C from './styles';
import { MiddleSidebar } from '../../components/MiddleSidebar';
import { Contacts } from '../../components/Contacts';
import { TopTabBar } from '../../components/TopTabBar';
import { useState } from 'react';
import useWindowDimensions from '../../utils/UseWindowDimentions';
import { ContactForm } from '../../components/ContactForm';
import { ContactCode } from '../../components/Codes/ContactCode';
import { FormData } from '../../types/FormData';

const initialValue = { 
  name: '',
  email: '',
  message: '',
}

export const ContactMe = () => {
  const [folder, setFolder] = useState('contact-me');
  const [formData, setFormData] = useState<FormData>(initialValue);

  return(
    <C.Container>
      { useWindowDimensions().width < 1023 &&
        <C.Title>
          <p>_contact-me</p>
        </C.Title>
      }

      <MiddleSidebar items={
        <Contacts />
      } />

      <C.Content>
        { useWindowDimensions().width >= 1023 &&
          <TopTabBar tabTitle={ folder } titleDefault="contact-me" close={ setFolder } />
        }

        <C.Form>
          <ContactForm setFormData={ setFormData } />

          { useWindowDimensions().width >= 1023 && <ContactCode data={ formData } /> }
        </C.Form>
      </C.Content >
    </C.Container>
  );    
};
