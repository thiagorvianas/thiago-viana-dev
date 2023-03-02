import * as C from './styles';

type props = {
    items: JSX.Element;
}

export const MiddleSidebar = ({ items }: props) => {
  return(
    <C.Container>
      { items }
    </C.Container>
  );    
};
