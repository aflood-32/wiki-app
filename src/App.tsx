import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./common/layouts/Layout";
import MainPage from "./views/MainPage";
import ArticlePage from "./views/ArticlePage";
import Error from "./common/components/Error.component";

const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/article/:title" component={ArticlePage} />
      <Route
        path="*"
        render={() => <Error error="Requested page not found" />}
      />
    </Switch>
  </Layout>
);

export default App;
