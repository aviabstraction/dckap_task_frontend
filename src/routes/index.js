import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Custom Imports
import Layout from './layout';
import { HOME } from './routes';
import { Home } from '../screens';

const MainRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={HOME} exact component={Home} />
      </Switch>
    </Router>
  );
};

//Wrapping HOC

export default function () {
  return (
    <Layout>
      <MainRouter />
    </Layout>
  );
}
