import * as C from './styles';
import { Comment } from '../Codes/Comment';
import { Const } from '../Codes/Const';

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
            <Comment text="complete the game to continue" />
            <Comment text="you can also see it on my Github page or Linkedin" />
            
            <Const constName="githubLink" constString="https://linkedin.com/in/thiagovianadev/" />
            <Const constName="linkedinLink" constString="https://linkedin.com/in/thiagovianadev/" />
          </C.Links>
        </C.TextContent>

        <C.GameContent />
      </C.Content>
    </C.Container>
  );
}