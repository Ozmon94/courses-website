import StoreProvider from '../store/StoreProvider'
import GlobalStyle from '../components/globalStyle'
import Header from './Header'

function App() {
  return (
    <>
    <GlobalStyle/>
    <StoreProvider>
    <Header/>
    </StoreProvider>
    </>
  );
}

export default App;
