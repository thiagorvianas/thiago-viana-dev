import * as C from './styles';
import { Certificates } from '../../../../types/AboutData';

type props = {
  data: Certificates;
};

export const CertificateData = ({ data }: props) => {  
  return(
      <>
        <C.Line>
          <p>{'/**'}</p>
        </C.Line>

          <C.DataCertificate>
            <C.Line>
              <p>* { data.title }</p>
            </C.Line>

            <C.Line>
              <p>* { data.institution }</p>
            </C.Line>

            <C.Line>
              <p>* <a href={ data.link } rel="noreferrer" target="_blank">click here</a> and access the credential</p>
            </C.Line>  
          </C.DataCertificate>
        
        <C.Line>
            <p>*</p>
        </C.Line>
           
        <C.Line>
            <p>*</p>
        </C.Line>

        <C.Line>
          <p>{'*/'}</p>
        </C.Line>
      </>
  );    
};
