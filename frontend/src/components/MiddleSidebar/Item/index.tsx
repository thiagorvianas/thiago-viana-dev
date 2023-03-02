import { useState } from 'react';
import * as C from './styles';
import { RiArchiveFill } from 'react-icons/ri';

type props = {
  ItemTitle: string;
}

export const Item = ({ ItemTitle }: props) => {
  return(
    <C.Container>
      <C.Item>
        <C.ItemIcon>
          <RiArchiveFill />
        </C.ItemIcon>

        <C.ItemText>
          { ItemTitle }
        </C.ItemText>
      </C.Item>
    </C.Container>
  );    
};
