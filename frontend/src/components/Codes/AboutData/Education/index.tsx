import { Education } from '../../../../types/AboutData';
import * as C from './styles';

type props = {
  data: Education;
};

export const EducationData = ({ data }: props) => {  
  return(
    <>
      <C.Line>
        <p>{'/**'}</p>
      </C.Line>

      <C.DataExperience>
        <C.Line>
          <p>* { data.title }</p>
        </C.Line>
           
        <C.Line>
          <p>* { data.type }</p>
        </C.Line>

        <C.Line>
          <p>* { data.institution }</p>
        </C.Line>

        <C.Line>
          <p>* { data.start } - { data.end }</p>
        </C.Line>

        <C.Line>
          <p>*</p>
        </C.Line>
            
        <C.Line>
          <p>*</p>
        </C.Line>
      </C.DataExperience>

      <C.Line>
        <p>{'*/'}</p>
      </C.Line>
    </>
  );    
};
