import * as C from './styles';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export function SocialMobile () {
  return (
    <>
      <C.FindMe>
        <C.FindText>
          find me in:
        </C.FindText>
      </C.FindMe>

      <C.Socials>
        <C.Social href="https://www.linkedin.com/in/thiagovianadev/" target="_blank" >
          <BsLinkedin />
        </C.Social>

        <C.Social href="https://github.com/thiagorvianas" target="_blank" >
          <BsGithub />
        </C.Social>
      </C.Socials>
    </>
  );
}