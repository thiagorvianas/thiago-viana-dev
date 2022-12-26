import * as C from './styles';
import useWindowDimensions from '../../utils/UseWindowDimentions';

import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <C.Container>
      { useWindowDimensions().width >= 1023 ?
        <DesktopMenu /> :
        <MobileMenu />
      }
    </C.Container>
  );
}