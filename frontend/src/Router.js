import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import Home from './pages/home/Home';
import NotFound from './components/404/NotFound.js';
import Logo from './components/Logo.js';
import Menu from './components/Menu.js';

const Router = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Logo />
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
