import { useState } from 'react';
import * as C from './styles';
import { MiddleSidebar } from '../../components/MiddleSidebar';
import { ItemDispenser } from '../../components/MiddleSidebar/ItemDispenser';
import { FilterItem } from '../../components/FilterItem';

export const Projects = () => {
  const [open, setOpen] = useState(false);

  return(
    <C.Container>
      <MiddleSidebar items={
        <ItemDispenser
          dispenserTitle="projects"
          setOpen={ setOpen }
          items={
            <FilterItem />
          }
        />
      } />
      
      <C.DataContent>
        itens
      </C.DataContent>
    </C.Container>
  );    
};
