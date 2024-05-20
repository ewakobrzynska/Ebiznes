import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import OAuth2Callback from './components/OAuth2Callback';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/oauth2/success" component={OAuth2Callback} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
