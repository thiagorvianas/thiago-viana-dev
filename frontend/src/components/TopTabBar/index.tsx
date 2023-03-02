import * as C from './styles';

type props = {
  tabTitle: string;
  titleDefault: string;
  close(string: string): void;
}

export const TopTabBar = ({ tabTitle, titleDefault, close }: props) => {
  return(
    <C.Container>
      <C.Tab>
        <C.TabText>
          { tabTitle }
        </C.TabText>

        <C.TabCloseBtn onClick={ () => close(titleDefault) } >
          x
        </C.TabCloseBtn>
      </C.Tab>
    </C.Container>
  );    
};
