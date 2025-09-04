import * as C from './styles';
import useWindowDimensions from '../../../../utils/UseWindowDimentions';

export const DefaultContent = () => {  
  return(
    <>
      <C.Line>
        <p>{'/**'}</p>
      </C.Line>

      <C.Data>
        <C.Line>
          <p>* Hello, my name is Thiago Viana and I'm a Full Stack Developer.</p>
        </C.Line>

        <C.Line>
          <p>*</p>
        </C.Line>

        <C.Line>
          <p>* Fullstack Developer with experience in React.js, TypeScript and Node.js, applying agile methodologies to deliver scalable and high-performance solutions. I worked on business management systems, educational platforms (EdTech) and digital marketing projects, combining background in design and marketing to create functional, intuitive and visually attractive applications.</p>
        </C.Line>

        <C.Line>
          <p>*</p>
        </C.Line>

        <C.Line>
          <p>* Experience in: React.js • TypeScript • Node.js • Cypress • MySQL • WordPress • REST API • Git/GitHub</p>
        </C.Line>

        <C.Line>
          <p>*</p>
        </C.Line>

        <C.Line>
          <p>* Interests: Web Development, EdTech, SaaS, Automation and Open Source Projects</p>
        </C.Line>

        <C.Line>
          <p>*</p>
        </C.Line>

        <C.Line>
          <p>* Learn more about me by browsing {
            useWindowDimensions().width >= 1023 ? 'the archives on the left.' : 'in this archives.'}</p>
        </C.Line>
            
        <C.Line>
          <p>*</p>
        </C.Line>
      </C.Data>

      <C.Line>
        <p>{'*/'}</p>
      </C.Line>
    </>
  );    
};
