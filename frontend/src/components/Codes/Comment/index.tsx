import * as C from './styles';

type props = {
  text: string;
}

export function Comment ({ text }: props) {
  return(
    <C.CommentItems>{'// '}{ text }</C.CommentItems>
  );
}
