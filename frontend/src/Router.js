import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Theme from './components/Theme';

import GlobalStyle from './components/GlobalStyle';
import WelcomeAnimation from './pages/WelcomeAnimation';
import StartWithAccount from './pages/StartWithAccount';
import Home from './pages/home/Home';
import MenuMobile from './pages/home/MenuMobile';
import NotFound from './pages/404/NotFound.js';
import Logo from './components/Logo.js';
import Menu from './components/Menu.js';
import MenuBtn from './components/MenuBtn';
import Signup from './pages/forms/Signup';
import Login from './pages/forms/Login';
import RecoverPassword from './pages/forms/RecoverPassword';

const Router = () => {
  const [ enter, setEnter ] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      setEnter(true);
    }, 2000);
  });

  return (
  <BrowserRouter>
    <Theme>
      <GlobalStyle />
      {enter ? 
      <>
        <Logo />
        {/* <Menu /> */}
        <MenuBtn />
        <Switch>
          <Route exact path="/" component={StartWithAccount} />
          <Route path="/home" component={Home} />
          <Route path="/menu" component={MenuMobile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/recover-password" component={RecoverPassword} />
          <Route component={NotFound} />
        </Switch>
      </> : 
      <WelcomeAnimation />}
    </Theme>
  </BrowserRouter>
  );
};

export default Router;
