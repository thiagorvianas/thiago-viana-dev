import * as C from './styles';

export function FilterItem() {
  return(
    <C.Item>
        <C.Check type="checkbox" id="scales" name="scales" />
        <C.Text htmlFor="scales">Test</C.Text>
    </C.Item>
  );
};