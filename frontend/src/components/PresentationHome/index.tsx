import * as C from './styles';

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

          </C.Links>
        </C.TextContent>

        <C.GameContent />
      </C.Content>
    </C.Container>
  );
}