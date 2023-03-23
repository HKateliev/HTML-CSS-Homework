import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.less';
import { GlobalStyle } from './styles/app.css';
import { Content } from './components/Container/Content';
import { ErrorPage } from './components/Error';
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path='/not-found' component={ErrorPage} />
                <Route path='/' component={Content} />
            </Switch>
            <div className='' style={{ width: '100%', marginTop: '', 'margin-top': '' }}></div>
        </BrowserRouter>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab='home' />);
