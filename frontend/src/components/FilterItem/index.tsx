import * as C from './styles';
import { StackData } from '../../types/StackData';
import { DiJavascript1, DiReact } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { SiCss3, SiDocker, SiHtml5, SiMongodb, SiRedux, SiStyledcomponents } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { useEffect, useState } from 'react';

type props = {
  stack: StackData;
  filtersList: string[];
  setFilters(filters: string[] | object): void;
};

export function FilterItem({ stack, filtersList, setFilters }: props) {
  const [selected, setSelected] = useState(false);

  const stackGenerator = (type: string) => {
    switch (type) {
      case 'react.js':
        return (
          <DiReact />
        );
      case 'javascript':
        return (
          <DiJavascript1 />
        );
      case 'redux':
        return (
          <SiRedux />
        );
      case 'rest-api':
        return (
          <TbApi />
        );
      case 'docker':
        return (
          <SiDocker />
        );
      case 'html':
        return (
          <SiHtml5 />
        );
      case 'css':
        return (
          <SiCss3 />
        )
      case 'mysql':
        return (
          <GrMysql />
        )
      case 'mongodb':
        return (
          <SiMongodb />
        )
      case 'styled-components':
        return (
          <SiStyledcomponents />
        )
      default:
          break;
    }
  }

  useEffect(() => {
    if (selected && !filtersList.includes(stack.name)) {
      setFilters([...filtersList, stack.name]);
    } else {
      setFilters(filtersList.filter((filter) => filter !== stack.name));
    }
  }, [selected]);

  return(
    <C.Item>
        <C.Check
          type="checkbox"
          id={ stack.name }
          name={ stack.name }
          onChange= {(e) => setSelected(e.target.checked) }
        />
        <C.Icon>{ stackGenerator(stack.name) }</C.Icon>
        <C.Text htmlFor={ stack.name }>{ stack.name }</C.Text>
    </C.Item>
  );
};
