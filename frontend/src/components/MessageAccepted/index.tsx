import * as C from './styles';

export function MessageAccepted() {
  return (
    <C.Container>
      <C.Message>
        <h2>Thank you! 🤘</h2>
        <p>Your message has been accepted. You will recieve answer really soon!</p>
      </C.Message>

      <C.NewMsgBtn>send-new-message</C.NewMsgBtn>
    </C.Container>
  );
}
