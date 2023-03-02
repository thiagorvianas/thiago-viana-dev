import { useEffect, useState } from 'react';
import * as C from './styles';
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md';
import useWindowDimensions from '../../../utils/UseWindowDimentions';

type props = {
  dispenserTitle: string;
  items: JSX.Element;
  setOpen(status: boolean): void;
}

export const ItemDispenser = ({ dispenserTitle, items, setOpen }: props) => {
  const [openItem, setOpenItem] = useState(useWindowDimensions().width >= 1023);

  useEffect(() => {
    setOpen(openItem);
  }, [openItem]);

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
