import * as C from './styles';

type props = {
  ItemTitle: string;
  stackIcon: JSX.Element;
}

export const StackItem = ({ ItemTitle, stackIcon }: props) => {
  return(
    <C.Container>
      <C.Item>
        <C.ItemIcon>
          { stackIcon }
        </C.ItemIcon>

        <C.ItemText>
          { ItemTitle }
        </C.ItemText>
      </C.Item>
    </C.Container>
  );    
};
