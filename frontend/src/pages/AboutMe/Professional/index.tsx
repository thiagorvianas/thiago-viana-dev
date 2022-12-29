import * as C from './styles';

import { MiddleSidebar } from '../../../components/MiddleSidebar';
import { FolderDispenser } from '../../../components/MiddleSidebar/FolderDispenser';
import { ItemDispenser } from '../../../components/MiddleSidebar/ItemDispenser';
import { Item } from '../../../components/MiddleSidebar/Item';
import { TopTabBar } from '../../../components/TopTabBar';
import { Contacts } from '../../../components/Contacts';

export const ProfessionalInfo = () => {

  return(
    <C.Container>
      <MiddleSidebar items={
        <>
          <ItemDispenser
            dispenserTitle="professional-info"
            items={
              <C.Items>
                <FolderDispenser
                  folderTitle="experiences"
                  color="#E99287"
                  items={
                    <Item ItemTitle="Full-Stack Designer"/>
                  }
                />

                <FolderDispenser
                  folderTitle="stacks"
                  color="#3A49A4"
                  items={
                    <Item ItemTitle="React.js"/>
                  }
                />
              </C.Items>
            } 
          />
          
          <Contacts />
        </>
      } />

      <TopTabBar tabTitle="professional-info" />
    </C.Container>
  );    
};
