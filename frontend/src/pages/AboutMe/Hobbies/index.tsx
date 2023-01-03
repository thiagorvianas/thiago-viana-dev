import { useState } from 'react';
import * as C from './styles';

import { MiddleSidebar } from '../../../components/MiddleSidebar';
import { FolderDispenser } from '../../../components/MiddleSidebar/FolderDispenser';
import { ItemDispenser } from '../../../components/MiddleSidebar/ItemDispenser';
import { Item } from '../../../components/MiddleSidebar/Item';
import { TopTabBar } from '../../../components/TopTabBar';
import { Contacts } from '../../../components/Contacts';

export const HobbiesInfo = () => {
  const [folder, setFolder] = useState('');

  return(
    <C.Container>
      <MiddleSidebar items={
        <>
          <ItemDispenser
            dispenserTitle="hobbies-info"
            items={
              <C.Items>
                <FolderDispenser
                  folderTitle="games"
                  color="#E99287"
                  items={
                    <Item ItemTitle="cs-go"/>
                  }
                />
              </C.Items>
            } 
          />

          <Contacts />
        </>
      } />

      <C.Content>
        <TopTabBar tabTitle="hobbies-info" titleDefault="hobbies-info" close={ setFolder } />
        Content
      </C.Content>
    </C.Container>
  );    
};
