import * as C from './styles';
import useWindowDimensions from '../../utils/UseWindowDimentions';
import { SocialDesktop } from './SocialDesktop';
import { SocialMobile } from './SocialMobile';

export function Footer () {
  return (
    <C.Container>
      { useWindowDimensions().width >= 1023 ?
        <SocialDesktop /> :
        <SocialMobile />
      }
    </C.Container>
  );
}