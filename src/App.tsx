import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './common/Layout';
import MainPage from './views/MainPage';
import ArticlePage from './views/ArticlePage';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/article/:title" component={ArticlePage} />
      <Route path="*" render={() => <h1>Page not found</h1>} />
    </Switch>
  </Layout>
);

export default App;
