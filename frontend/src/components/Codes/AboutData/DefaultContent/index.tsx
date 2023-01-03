import * as C from './styles';

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
          <p>* Learn more about me by browsing the archives on the left.</p>
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
