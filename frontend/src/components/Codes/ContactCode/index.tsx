import { useEffect, useState } from 'react';
import * as C from './styles';
import useWindowDimensions from '../../../utils/UseWindowDimentions';
import { LineNumbersContact } from '../../../utils/LineNumbers';
import { FormData } from '../../../types/FormData';

type props = {
  data: FormData;
}

export const ContactCode = ({ data }: props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const today = new Date();

  useEffect(() => {
    setName(data.name);
    setEmail(data.email);
    setMessage(data.message);
  }, [name, email, message, data]);

  return (
    <C.DataContainer open={open}>
      <C.Data>
        { useWindowDimensions().width >= 1023 &&
          <C.Counter>
            { LineNumbersContact.map((item, i) => (
              <C.Number key={ i }>{ item }</C.Number>
            )) }
          </C.Counter> }

          <C.Code>
            <C.ConstItems>
              <p className="const-declaration">const</p>
              <p className="const-name">button</p>
              <p className="const-equals">=</p>
              <p className="const-string"> document</p>
              <p>{'.'}</p>
              <p className="const-string"> querySelector</p>
              <p>{'('}</p>
              <p className="const-method">'#sendBtn'</p>
              <p>{');'}</p>
            </C.ConstItems>

            <C.Object>
              <C.ObjectDeclaration>
                <p className="const-declaration">const</p>
                <p className="const-name">message</p>
                <p><span className="const-equals">=</span>{'{'}</p>
              </C.ObjectDeclaration>

              <C.ObjectContent>
                <p className="const-name">
                  name
                  <span>: </span>
                  <span className="object-entrie">"{ name }"</span>
                </p>
                <p className="const-name">
                  email
                  <span>: </span>
                  <span className="object-entrie">"{ email }"</span>
                </p>
                <p className="const-name">
                  message
                  <span>: </span>
                  <span className="object-entrie">"{ message }"</span>
                </p>
                <p className="const-date">
                  date
                  <span>: </span>
                  <span className="object-entrie">"{ today.toDateString() }"</span>
                </p>
              </C.ObjectContent>

              <C.ObjectDeclaration>
                <p>{'}'}</p>
              </C.ObjectDeclaration>
            </C.Object>

            <C.Func>
              <C.FuncDeclaration>
                <p className="const-name">button</p>
                <p>{'.'}</p>
                <p className="const-name">addEventListener</p>
                <p>{'('}</p>
                <p className="const-method">{ `'click'` }</p>
                <p>{', ()'}</p>
                <p className="const-equals">{ '=>' }</p>
                <p>{'{'}</p>
              </C.FuncDeclaration>

              <C.FuncContent>
                <p className="const-name">form</p>
                <p>{'.'}</p>
                <p className="const-name">send</p>
                <p>{'('}</p>
                <p className="const-name">message</p>
                <p>{');'}</p>
              </C.FuncContent>

              <C.FuncDeclaration>
                <p>{'});'}</p>
              </C.FuncDeclaration>
            </C.Func>
          </C.Code>
        </C.Data>
    </C.DataContainer>
  );
}
