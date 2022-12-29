import * as C from './styles';

type props = {
  tabTitle: string;
}

export const TopTabBar = ({ tabTitle }: props) => {
  return(
    <C.Container>
      <C.Tab>
        <C.TabText>
          { tabTitle }
        </C.TabText>

        <C.TabCloseBtn>
          x
        </C.TabCloseBtn>
      </C.Tab>
    </C.Container>
  );    
};
