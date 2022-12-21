import { Main } from './routes';
import GlobalStyles from './Global.styles';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

export default App;
