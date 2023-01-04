import { useState } from 'react';
import * as C from './styles';

import { MiddleSidebar } from '../../../components/MiddleSidebar';
import { FolderDispenser } from '../../../components/MiddleSidebar/FolderDispenser';
import { ItemDispenser } from '../../../components/MiddleSidebar/ItemDispenser';
import { TopTabBar } from '../../../components/TopTabBar';
import { Contacts } from '../../../components/Contacts';
import { StackItem } from '../../../components/MiddleSidebar/Item/Stack';
import { LineNumbers } from '../../../utils/LineNumbers';
import { SiCounterstrike } from 'react-icons/si';
import { MdSportsSoccer } from 'react-icons/md';
import { GiMuscleUp } from 'react-icons/gi';
import { RiBoxingFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { DefaultContent } from '../../../components/Codes/AboutData/DefaultContent';
import useWindowDimensions from '../../../utils/UseWindowDimentions';

export const HobbiesInfo = () => {
  const [folder, setFolder] = useState('hobbies-info');
  const [open, setOpen] = useState(false);

  return(
    <C.Container>
      <MiddleSidebar items={
        <>
          <ItemDispenser
            dispenserTitle="hobbies-info"
            setOpen={ setOpen }
            items={
              <C.Items>
                <FolderDispenser
                  folderTitle="games"
                  color="#E99287"
                  items={
                    <StackItem ItemTitle="cs-go" stackIcon={ <SiCounterstrike /> } />
                  }
                />

                <FolderDispenser
                  folderTitle="sports"
                  color="#43D9AD"
                  items={
                    <>
                      <StackItem ItemTitle="bodybuilding" stackIcon={ <GiMuscleUp /> } />
                      <StackItem ItemTitle="soccer" stackIcon={ <MdSportsSoccer /> } />
                      <StackItem ItemTitle="boxing" stackIcon={ <RiBoxingFill /> } />
                    </>
                  }
                />

                <FolderDispenser
                  folderTitle="others"
                  color="#3A49A4"
                  items={
                    <StackItem ItemTitle="travel" stackIcon={ <BiWorld /> } />
                  }
                />
              </C.Items>
            } 
          />

          { useWindowDimensions().width >= 1023 && <Contacts /> }
        </>
      } />

      { useWindowDimensions().width >= 1023 &&
        <C.Content>
          <TopTabBar tabTitle={ folder } titleDefault="hobbies-info" close={ setFolder } />
          
          <C.DataContainer>        
            <C.Counter>
              { LineNumbers.map((item) => (
                <C.Number>{ item }</C.Number>
              )) }
            </C.Counter>

            <C.DataContent>
              <DefaultContent />
            </C.DataContent>
          </C.DataContainer>
        </C.Content> }
    </C.Container>
  );    
};
