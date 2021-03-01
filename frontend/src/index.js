import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { AppCtxProvider } from './hooks/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <AppCtxProvider>
        <Router /> 
    </AppCtxProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
