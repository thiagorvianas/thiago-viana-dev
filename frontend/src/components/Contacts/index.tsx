import * as C from './styles';

import { ItemDispenser } from '../MiddleSidebar/ItemDispenser'
import { ContactItem } from './Item';
import { useState } from 'react';

export function Contacts() {  
  const [open, setOpen] = useState(false);
  
  return(
    <ItemDispenser
      dispenserTitle="contacts"
      setOpen={ setOpen }
        items={
          <C.Items>
            <ContactItem type="email" ItemTitle="trodrigo@gmail.com"/>
            <ContactItem type="phone" ItemTitle="+55 (86) 9 9962-6819"/>
          </C.Items>
        }
    />
  );
};