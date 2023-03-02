import { useState } from 'react';
import * as C from './styles';
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md';

type props = {
  dispenserTitle: string;
  items: JSX.Element;
}

export const MobileGeralDispenser = ({ dispenserTitle, items }: props) => {
  const [openItem, setOpenItem] = useState(false);

  return(
    <C.Container>
      <C.Dispenser
        onClick={ () => setOpenItem(!openItem) }
      >
        <C.DispenserCloseIcon>
          { openItem ? <MdArrowDropDown /> : <MdArrowRight /> }
        </C.DispenserCloseIcon>

        <C.DispenserText>
          { dispenserTitle }
        </C.DispenserText>
      </C.Dispenser>

      { openItem &&
        <C.Items>
          { items }
        </C.Items>
      }
    </C.Container>
  );    
};
