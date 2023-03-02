import * as C from './styles';

import { AiFillCode } from 'react-icons/ai';
import { RiUser4Fill, RiGamepadFill } from 'react-icons/ri';

type ContentData = {
  content: string;
  setContent(string: string): void;
};

export const LeftNavSidebar = ({ setContent, content }: ContentData) => {

  return(
    <C.Container>
      <C.NavSidebar>
        <C.NavItem
          onClick={ () => setContent('professional') }
          selected={ content === 'professional' }
        >
          <AiFillCode />
        </C.NavItem>

        <C.NavItem
          onClick={ () => setContent('personal') }
          selected={ content === 'personal' }
        >
          <RiUser4Fill />
        </C.NavItem>

        <C.NavItem
          onClick={ () => setContent('hobbies') }
          selected={ content === 'hobbies' }
        >
          <RiGamepadFill />
        </C.NavItem>
      </C.NavSidebar>
    </C.Container>
  );    
};
