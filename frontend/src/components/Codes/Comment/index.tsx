import * as C from './styles';

type props = {
  text: string;
}

export const SingleLineComment = ({ text }: props) => (<C.CommentItems>{'// '}{ text }</C.CommentItems>);
