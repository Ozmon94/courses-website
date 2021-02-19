import StoreProvider from '../store/StoreProvider'
import GlobalStyle from '../components/globalStyle'
import { HashRouter as Router } from 'react-router-dom'

import styled from 'styled-components';

import AsideMenu from './AsideMenu';
import Content from './Content'
import Header from './Header'
function App() {
  return (
    <>
    <GlobalStyle/>
    <StoreProvider>
      <Header/>
      <Router>
        <StyledDiv>
          <AsideMenu/>
          <Content/>
        </StyledDiv>
       </Router>
    </StoreProvider>
    </>
  );
}

const StyledDiv = styled.div`
margin-top:60px;
min-height:calc(100vh - 60px);
display: flex;
`

export default App;
