import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Theme from './components/Theme';
import { useContextInfo } from './hooks/index';

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
import Avatar from './components/Avatar';
import ConfirmEmail from './components/messages/ConfirmEmail';

const Router = () => {
  const [ enter, setEnter ] = useState(false);
  const { user } = useContextInfo();

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
        <Avatar />
        {/* <Menu /> */}
        <MenuBtn />
        <Switch>
          <Route exact path="/" component={StartWithAccount} />
          <Route path="/home" component={Home} />
          <Route path="/menu" component={MenuMobile} />
          <Route path="/signup" component={Signup} />
          <Route path="/confirm-email" component={ConfirmEmail} />
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
