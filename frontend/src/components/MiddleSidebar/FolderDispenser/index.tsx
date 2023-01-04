import { useState } from 'react';
import * as C from './styles';

import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiFolder3Fill } from 'react-icons/ri';
import useWindowDimensions from '../../../utils/UseWindowDimentions';

type props = {
  folderTitle: string;
  color: string;
  items: JSX.Element | JSX.Element[];
}

export const FolderDispenser = ({ folderTitle, color, items }: props) => {
  const [openItem, setOpenItem] = useState(useWindowDimensions().width >= 1023);

  return(
    <C.Container>
      <C.Folder
        onClick={ () => setOpenItem(!openItem) }
        selected={ openItem }
      >
        <C.FolderCloseIcon>
          { openItem ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight /> }
        </C.FolderCloseIcon>

        <C.FolderIcon color={ color }>
          <RiFolder3Fill />
        </C.FolderIcon>

        <C.FolderText>
          { folderTitle }
        </C.FolderText>
      </C.Folder>

      { openItem &&
        <C.Items>
          { items }
        </C.Items>
      }
    </C.Container>
  );    
};
