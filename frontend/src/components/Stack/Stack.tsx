import { DiJavascript1, DiReact } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { SiCss3, SiDocker, SiHtml5, SiMongodb, SiRedux, SiStyledcomponents } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import * as C from './styles';

type props = {
    icon: string;
}

export const Stack = ({ icon }: props) => {
  const stackGenerator = (type: string) => {
    switch (type) {
      case 'react':
        return (
          <C.Stack bg="#5ED7F2">
            <DiReact />
          </C.Stack>
        );
      case 'javascript':
        return (
          <C.Stack bg="#F7E018">
            <DiJavascript1 />
          </C.Stack>
        );
      case 'redux':
        return (
          <C.Stack bg="#6439BF">
            <SiRedux />
          </C.Stack>
        );
      case 'api':
        return (
          <C.Stack bg="#92CBF6">
            <TbApi />
          </C.Stack>
        );
      case 'docker':
        return (
          <C.Stack bg="#2496ED">
            <SiDocker />
          </C.Stack>
        );
      case 'html':
        return (
          <C.Stack bg="#FF4C15">
            <SiHtml5 />
          </C.Stack>
        );
      case 'css':
        return (
          <C.Stack bg="#0477BF">
            <SiCss3 />
          </C.Stack>
        )
      case 'mysql':
        return (
          <C.Stack bg="#037F8C">
            <GrMysql />
          </C.Stack>
        )
      case 'mongodb':
        return (
          <C.Stack bg="#0B8C43">
            <SiMongodb />
          </C.Stack>
        )
      case 'styled-components':
        return (
          <C.Stack bg="#BF60AF">
            <SiStyledcomponents />
          </C.Stack>
        )
      default:
          break;
    }
  }

  return(
    <>
      { stackGenerator(icon) }
    </>
  );    
};
