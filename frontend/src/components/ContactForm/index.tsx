import { useEffect, useState } from 'react';
import * as C from './style';
import { FormData } from '../../types/FormData';
import { MessageAccepted } from '../MessageAccepted';
import { useApi } from '../../hooks/useApi';

type props = {
  setFormData(data: FormData): void;
}

export const ContactForm = ({ setFormData }: props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [sendLoad, setSendLoad] = useState(false);
  const [disableBtn, setdisableBtn] = useState(true);

  const api = useApi();

  const sendMessage = async () => {
    try {
      const status = await api.sendMessage({ name, email, message });

      if (status === 201) {
        setShowForm(false);
      } 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setdisableBtn(false);
    } else {
      setdisableBtn(true);
    }
  }, [name, email, message]);

  useEffect(() => {
    showForm && setSendLoad(false);
  }, [showForm]);
    
  useEffect(() => {
    const formData = { name, email, message }
    
    setFormData(formData);
  }, [name, email, message]);

  return showForm ? 
    (<C.Form>
      <C.Label>
        <C.Title>
          _name<span>*</span>:
        </C.Title>
        
        <C.ShortText type="text" name="name" onChange={ (e) => setName(e.target.value) } />
      </C.Label>

      <C.Label>
        <C.Title>
          _email<span>*</span>:
        </C.Title>
        
        <C.ShortText type="email" name="email" onChange={ (e) => setEmail(e.target.value) } />
      </C.Label>

      <C.Label>
        <C.Title>
          _message<span>*</span>:
        </C.Title>
        
        <C.Message
          onChange={ (e) => setMessage(e.target.value) }
          maxLength={ 160 }
        />

        <C.Counter length={ message.length }>
          { message.length }/160
        </C.Counter>
      </C.Label>

      <C.FinalContent>
        <C.SubmitBtn
          type="submit"
          onClick={ (e) => {
            e.preventDefault();
            setSendLoad(true);
            sendMessage();
            setName('');
            setEmail('');
            setMessage('');
          }}
          disabled={ disableBtn }
          disableBtn={ disableBtn }
        >
          { !sendLoad ? 'submit-message' : <C.Loading><p>loading</p></C.Loading> }
        </C.SubmitBtn >

        <C.Required>* required</C.Required>
      </C.FinalContent>
    </C.Form>) : (<MessageAccepted showForm={ setShowForm } />)
};
