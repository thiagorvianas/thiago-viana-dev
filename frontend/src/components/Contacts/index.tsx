import * as C from './styles';

import { ItemDispenser } from '../MiddleSidebar/ItemDispenser'
import { ContactItem } from './Item';

export function Contacts() {    
  return(
    <ItemDispenser
      dispenserTitle="contacts"
        items={
          <C.Items>
            <ContactItem type="email" ItemTitle="trodrigo@gmail.com"/>
            <ContactItem type="phone" ItemTitle="(86) 9 9962-6819"/>
          </C.Items>
        }
    />
  );
};