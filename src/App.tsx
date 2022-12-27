import React from 'react';
import {Container, Logo, LogoContainer} from './Components/App.style'
import Header from './Components/Header';
import logo from './assets/logo.svg'
function App() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo}></Logo>
      </LogoContainer>
      <Header></Header>
    </Container>
  );
}

export default App;
