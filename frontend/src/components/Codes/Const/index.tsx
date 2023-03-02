import * as C from './styles';
import useWindowDimensions from '../../../utils/UseWindowDimentions';

type props = {
  constName: string;
  constString: string;
}

export function Const({ constName, constString }: props) {
  return(
    <C.ConstItems mobile={ useWindowDimensions().width < 1023 }>
      <span className="const-declaration">const</span>
      <span className="const-name">{ constName }</span>
      <span className="const-equals">=</span>
      <span className="const-string">“{ constString }”</span>
    </C.ConstItems>
  );
}
