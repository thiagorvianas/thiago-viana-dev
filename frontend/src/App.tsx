import GlobalStyles from './Global.styles';
import { Main } from './routes';
import { Header } from './components/Header';
import { ViewPort } from './Global.styles';

function App() {
  return (
    <ViewPort>
      <GlobalStyles />
      <Header />
      <Main />
    </ViewPort>
  );
}

export default App;
