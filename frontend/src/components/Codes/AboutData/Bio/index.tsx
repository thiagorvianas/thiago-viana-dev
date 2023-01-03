import * as C from './styles';
import { Bio } from '../../../../types/AboutData';

type props = {
  data: Bio;
};

export const BioData = ({ data }: props) => {  
  return(
      <>
        <C.Line>
          <p>{'/**'}</p>
        </C.Line>

          <C.DataExperience>
            { data.text.map((item) => (
              <>
                <C.Line>
                  <p>* { item }</p>
                </C.Line>
                
                <C.Line>
                    <p>*</p>
                </C.Line>
              </>
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
