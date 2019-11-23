import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/style.sass';
import './assets/js/index';

import HomePage from './components/pages/HomePage';
import ImprintPage from './components/pages/ImprintPage';
import PrivacyPage from './components/pages/PrivacyPage';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/imprint" component={ImprintPage}/>
        <Route path="/privacy" component={PrivacyPage}/>
        <Route path="*" component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;