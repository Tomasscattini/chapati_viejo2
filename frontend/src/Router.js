import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import WelcomeAnimation from './pages/WelcomeAnimation';
import Cursor from './components/Cursor';
import Home from './pages/home/Home';
import NotFound from './pages/404/NotFound.js';
import Logo from './components/Logo.js';
import Menu from './components/Menu.js';

const Router = () => {
  const [ enter, setEnter ] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setEnter(true);
    }, 1000);
  });

  return (
  <BrowserRouter>
    <GlobalStyle />
    <Cursor />
    {enter ? 
    <>
      <Logo />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </> : 
    <WelcomeAnimation />}
  </BrowserRouter>
  );
};

export default Router;
