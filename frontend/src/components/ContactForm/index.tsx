import * as C from './style';
import { FormData } from '../../types/FormData';
import { useEffect, useState } from 'react';

type props = {
  setFormData(data: FormData): void;
}

export const ContactForm = ({ setFormData }: props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    
  useEffect(() => {
    const formData = { name, email, message }
    
    setFormData(formData);
  }, [name, email, message]);

  return(
    <C.Form>
      <C.Label>
        <C.Title>
          _name:
        </C.Title>
      
        <C.ShortText type="text" name="name" onChange={ (e) => setName(e.target.value) } />
      </C.Label>

      <C.Label>
        <C.Title>
          _email:
        </C.Title>
      
        <C.ShortText type="email" name="email" onChange={ (e) => setEmail(e.target.value) } />
      </C.Label>

      <C.Label>
        <C.Title>
          _message:
        </C.Title>
      
        <C.Message onChange={ (e) => setMessage(e.target.value) } />
      </C.Label>
    </C.Form>
  );    
};
