import * as C from './styles';

import { MiddleSidebar } from '../../../components/MiddleSidebar';
import { FolderDispenser } from '../../../components/MiddleSidebar/FolderDispenser';
import { ItemDispenser } from '../../../components/MiddleSidebar/ItemDispenser';
import { Item } from '../../../components/MiddleSidebar/Item';
import { TopTabBar } from '../../../components/TopTabBar';
import { Contacts } from '../../../components/Contacts';

export const PersonalInfo = () => {
  return(
    <C.Container>
      <MiddleSidebar items={
        <>
          <ItemDispenser
            dispenserTitle="personal-info"
            items={
              <C.Items>
                <FolderDispenser
                  folderTitle="bio"
                  color="#E99287"
                  items={
                    <Item ItemTitle="info"/>
                  }
                />

                <FolderDispenser
                  folderTitle="education"
                  color="#3A49A4"
                  items={
                    <Item ItemTitle="high-school"/>
                  }
                />
              </C.Items>
            } 
          />

          <Contacts />
        </>
      } />
      
      <TopTabBar tabTitle="personal-info" />
    </C.Container>
  );    
};
