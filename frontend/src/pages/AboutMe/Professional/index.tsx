import * as C from './styles';

import { DiJavascript1, DiReact, DiGithubBadge, DiGit } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { SiCss3, SiDocker, SiHtml5, SiMongodb, SiRedux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import useWindowDimensions from '../../../utils/UseWindowDimentions';
import { useState, useEffect } from 'react';
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
  const [folder, setFolder] = useState('professional-info');
  const [dataId, setDataId] = useState(1000);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    folder === 'professional-info' && setDataId(1000);
  }, [folder]);

  return(
    <C.Container>
      <MiddleSidebar items={
        <>
          <ItemDispenser
            dispenserTitle="professional-info"
            setOpen={ setOpen }
            items={
              <C.Items> 
                <FolderDispenser
                  folderTitle="experiences"
                  color="#E99287"
                  items={
                    experiences.map((item) => (
                      <C.HandleItem
                        onClick={ () => {
                          setDataId(item.id - 1);
                          setFolder('experiences');
                        }}
                        selected={dataId === (item.id - 1)}
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
                      <StackItem ItemTitle="git" stackIcon={ <DiGit /> } />
                      <StackItem ItemTitle="gitHub" stackIcon={ <DiGithubBadge /> } />
                    </>
                  }
                />
              </C.Items>
            } 
          />
          
          { useWindowDimensions().width >= 1023 && <Contacts />}
        </>
      } />

        <C.Content>
          { useWindowDimensions().width >= 1023 &&
            <TopTabBar tabTitle={ folder } titleDefault="professional-info" close={ setFolder } />
          }

          <C.DataContainer open={open}>        
            { useWindowDimensions().width >= 1023 &&
              <C.Counter>
                { LineNumbers.map((item) => (
                  <C.Number>{ item }</C.Number>
                )) }
              </C.Counter> }

            { useWindowDimensions().width < 1023 ?
            ( open && 
              <C.DataContent>
                { 
                  dataId === 1000 ?
                  <DefaultContent /> : <ExperienceData data={ experiences[dataId] } />
                }
              </C.DataContent>
            ) :
              <C.DataContent>
                { 
                  dataId === 1000 ?
                  <DefaultContent /> : <ExperienceData data={ experiences[dataId] } />
                }
              </C.DataContent> }
          </C.DataContainer>
        </C.Content> 
    </C.Container>
  );    
};
