import GlobalStyles from './Global.styles';
import { Main } from './routes';
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
