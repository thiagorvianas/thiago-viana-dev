import * as C from './styles';
import { ProjectData } from '../../types/ProjectData';
import { Stack } from '../Stack/Stack';

type props = {
    data: ProjectData;
}

export const CardProject = ({ data }: props) => {
  return(
    <C.Card>
      <C.Cover image={ data.image }>
        <C.Stacks>
          { data.stacks.map((item) => <Stack key={ item } icon={ item } />) }
        </C.Stacks>
      </C.Cover>

      <C.Info>
        <C.Text>
          { data.description }
        </C.Text>

        <C.ViewProject href={ data.link } target="_blank">
            view-project
        </C.ViewProject>
      </C.Info>
    </C.Card>
  );    
};
