import * as C from './styles';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function SocialDesktop () {
  return (
    <>
      <C.FindMe>
        <C.FindText>
          find me in:
        </C.FindText>

        <C.Social href="https://www.linkedin.com/in/thiagovianadev/" target="_blank" >
          <BsLinkedin />
        </C.Social>
      </C.FindMe>

      <C.GitHub>
        <C.Social href="https://github.com/thiagorvianas" target="_blank" >
            <C.GitHubText>
               @thiagorvianas
            </C.GitHubText>
          <BsGithub />
        </C.Social>
      </C.GitHub>
    </>
  );
}