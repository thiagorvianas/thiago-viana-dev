import { Experience } from '../../../../types/AboutData';
import * as C from './styles';

type props = {
  data: Experience;
};

export const ExperienceData = ({ data }: props) => {  
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
          <p>* { data.company } · { data.modality }</p>
        </C.Line>

        <C.Line>
          <p>* { data.start } - { data.workingNow ? 'now' : data.end }</p>
        </C.Line>

        <C.Line>
          <p>*</p>
        </C.Line>

        { data.attributes.map((attribute) => (
          <C.Line>
            <p>* • { attribute }</p>
          </C.Line>
        )) }
            
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
