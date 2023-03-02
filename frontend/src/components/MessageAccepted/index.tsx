import * as C from './styles';

type props = {
  showForm(status: boolean): void;
}

export function MessageAccepted({ showForm }: props) {
  return (
    <C.Container>
      <C.Message>
        <h2>Thank you! 🤘</h2>
        <p>Your message has been accepted. You will recieve answer really soon!</p>
      </C.Message>

      <C.NewMsgBtn onClick={ () => showForm(true) }>send-new-message</C.NewMsgBtn>
    </C.Container>
  );
}
