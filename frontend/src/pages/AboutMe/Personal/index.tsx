import { useEffect, useState } from 'react';
import * as C from './styles';

import { MiddleSidebar } from '../../../components/MiddleSidebar';
import { FolderDispenser } from '../../../components/MiddleSidebar/FolderDispenser';
import { ItemDispenser } from '../../../components/MiddleSidebar/ItemDispenser';
import { Item } from '../../../components/MiddleSidebar/Item';
import { TopTabBar } from '../../../components/TopTabBar';
import { Contacts } from '../../../components/Contacts';
import { DefaultContent } from '../../../components/Codes/AboutData/DefaultContent';
import { BioData } from '../../../components/Codes/AboutData/Bio';
import { bioData } from '../../../data/AboutMe.data';
import { educationData } from '../../../data/AboutMe.data';
import { EducationData } from '../../../components/Codes/AboutData/Education';
import { LineNumbers } from '../../../utils/LineNumbers';

export const PersonalInfo = () => {
  const [folder, setFolder] = useState('personal-info');
  const [dataId, setDataId] = useState(1000);

  useEffect(() => {
    folder === 'personal-info' && setDataId(1000);
  }, [folder]);

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
                    bioData.map((item) => (
                      <C.HandleItem
                        onClick={ () => {
                          setDataId(item.id - 1);
                          setFolder('bio');
                        }}
                        selected={(dataId === (item.id - 1)) && (folder === 'bio')}
                      >
                        <Item ItemTitle="index.ts" />
                      </C.HandleItem>
                    ))
                  }
                />

                <FolderDispenser
                  folderTitle="education"
                  color="#3A49A4"
                  items={
                    educationData.map((item) => (
                      <C.HandleItem
                        onClick={ () => {
                          setDataId(item.id - 1);
                          setFolder('education');
                        }}
                        selected={(dataId === (item.id - 1)) && (folder === 'education')}
                      >
                        <Item ItemTitle={ item.title } />
                      </C.HandleItem>
                    ))
                  }
                />
              </C.Items>
            } 
          />

          <Contacts />
        </>
      } />
      <C.Content>
        <TopTabBar tabTitle={ folder } titleDefault="personal-info" close={ setFolder } />

        <C.DataContainer>        
          <C.Counter>
            { LineNumbers.map((item) => (
              <C.Number>{ item }</C.Number>
            )) }
          </C.Counter>

          <C.DataContent>
            { (dataId === 1000) && <DefaultContent /> }
            { (folder === 'bio') && <BioData data={ bioData[dataId] } />}
            { (folder === 'education') && <EducationData data={ educationData[dataId] } />}
          </C.DataContent>
        </C.DataContainer>
      </C.Content>
    </C.Container>
  );    
};
