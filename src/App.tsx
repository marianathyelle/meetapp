import React from 'react';
import { GlobalStyle } from './styles/global';
import { Routes } from './routes';

const App = () => {
  return (
    <React.Fragment>
      <Routes />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
