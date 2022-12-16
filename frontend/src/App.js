import ThDevProvider from './context/thDevProvider';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <ThDevProvider>
      <GlobalStyles />
      <p>test</p>
    </ThDevProvider>
  );
}

export default App;
