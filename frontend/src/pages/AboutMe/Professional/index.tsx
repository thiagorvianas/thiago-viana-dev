import * as C from './styles';

import { DiJavascript1, DiReact } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { SiCss3, SiDocker, SiHtml5, SiMongodb, SiRedux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

import { useState } from 'react';
import { DefaultContent } from '../../../components/Codes/AboutData/DefaultContent';
import { ExperienceData } from '../../../components/Codes/AboutData/Experience';
import { Contacts } from '../../../components/Contacts';
import { MiddleSidebar } from '../../../components/MiddleSidebar';
import { FolderDispenser } from '../../../components/MiddleSidebar/FolderDispenser';
import { Item } from '../../../components/MiddleSidebar/Item';
import { StackItem } from '../../../components/MiddleSidebar/Item/Stack';
import { ItemDispenser } from '../../../components/MiddleSidebar/ItemDispenser';
import { TopTabBar } from '../../../components/TopTabBar';
import { experiences } from '../../../data/AboutMe.data';
import { LineNumbers } from '../../../utils/LineNumbers';

export const ProfessionalInfo = () => {
  const [folder, setFolder] = useState('');
  const [xpId, setXpId] = useState(1000);

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
                    experiences.map((item) => (
                      <C.HandleItem
                        onClick={ () => {
                          setXpId(item.id - 1);
                        }}
                        selected={xpId === (item.id - 1)}
                      >
                        <Item ItemTitle={item.title} />
                      </C.HandleItem>
                    ))
                  }
                />

                <FolderDispenser
                  folderTitle="stacks"
                  color="#3A49A4"
                  items={
                    <>
                      <StackItem ItemTitle="react.js" stackIcon={ <DiReact /> } />
                      <StackItem ItemTitle="javascript" stackIcon={ <DiJavascript1 /> } />
                      <StackItem ItemTitle="redux" stackIcon={ <SiRedux /> } />
                      <StackItem ItemTitle="rest api" stackIcon={ <TbApi /> } />
                      <StackItem ItemTitle="docker" stackIcon={ <SiDocker /> } />
                      <StackItem ItemTitle="html" stackIcon={ <SiHtml5 /> } />
                      <StackItem ItemTitle="css" stackIcon={ <SiCss3 /> } />
                      <StackItem ItemTitle="mySql" stackIcon={ <GrMysql /> } />
                      <StackItem ItemTitle="mongoDb" stackIcon={ <SiMongodb /> } />
                    </>
                  }
                />
              </C.Items>
            } 
          />
          
          <Contacts />
        </>
      } />

      <C.Content>
        <TopTabBar tabTitle="professional-info" titleDefault="professional-info" close={ setFolder } />

        <C.DataContainer>        
          <C.Counter>
            { LineNumbers.map((item) => (
              <C.Number>{ item }</C.Number>
            )) }
          </C.Counter>

          <C.DataContent>
            { xpId === 1000 ? <DefaultContent /> : <ExperienceData data={ experiences[xpId] } />}
          </C.DataContent>
        </C.DataContainer>
      </C.Content>
    </C.Container>
  );    
};
