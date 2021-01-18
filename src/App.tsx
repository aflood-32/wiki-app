import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './common/Layout';
import MainPage from './views/MainPage';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/test">
        <div>
          test
        </div>
      </Route>
      <Route path="/" component={MainPage} />
    </Switch>
  </Layout>
);

export default App;
