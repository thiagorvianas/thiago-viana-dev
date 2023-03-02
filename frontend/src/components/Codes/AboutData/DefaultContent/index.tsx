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
          <p>* Hello, my name is Thiago Viana and I'm a Front-End Developer.</p>
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
