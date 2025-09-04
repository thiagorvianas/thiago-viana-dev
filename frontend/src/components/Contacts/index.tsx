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
            <a href="mailto:contato@thiagoviana.dev" target="_blank">
              <ContactItem type="email" ItemTitle="contato@thiagoviana.dev"/>
            </a>

            <a href="https://wa.me/5586988786819"  target="_blank">
              <ContactItem type="phone" ItemTitle="+55 (86) 9 8878-6819"/>
            </a>
          </C.Items>
        }
    />
  );
};