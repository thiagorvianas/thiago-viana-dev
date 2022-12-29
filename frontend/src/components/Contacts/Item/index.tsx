import * as C from './styles';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

type props = {
  ItemTitle: string;
  type: string;
}

export const ContactItem = ({ ItemTitle, type }: props) => {
  return(
    <C.Container>
      <C.Item>
        <C.ItemIcon>
          { type === 'email' && <MdEmail /> }
          { type === 'phone' && <BsTelephoneFill /> }
        </C.ItemIcon>

        <C.ItemText>
          { ItemTitle }
        </C.ItemText>
      </C.Item>
    </C.Container>
  );    
};
