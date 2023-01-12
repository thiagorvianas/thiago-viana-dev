import * as C from './styles';
import { SingleLineComment } from '../Codes/Comment';
import { Const } from '../Codes/Const';
import useWindowDimensions from '../../utils/UseWindowDimentions';
import photo from '../../images/thiago-photo.png';

export function PresentationHome () {
  return (
    <C.Container>
      <C.Content>

        <C.TextContent>
          <C.Hello>
            <h4>Hi all. I am</h4>
            <h1>Thiago Viana</h1>
            <h3>{'> '}Front-end developer</h3>
          </C.Hello>

          <C.Links>
            { useWindowDimensions().width >= 1023 && <SingleLineComment text="complete the game to continue" />}
            <SingleLineComment text="you can also see it on my Github page or Linkedin" />
            
            <a href="https://linkedin.com/in/thiagovianadev/" target="_blank" rel="noreferrer">
              <Const constName="githubLink" constString="https://linkedin.com/in/thiagovianadev/" />
            </a>

            <a href="https://linkedin.com/in/thiagovianadev/" target="_blank" rel="noreferrer">
              <Const constName="linkedinLink" constString="https://linkedin.com/in/thiagovianadev/" />
            </a>
          </C.Links>
        </C.TextContent>

        <C.GameContent image={ photo } />
      </C.Content>
    </C.Container>
  );
}