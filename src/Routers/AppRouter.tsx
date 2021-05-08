import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = () => {

  const publicRoutes = (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact={true} path="/">
          <div>D&D Legacy</div>
        </Route>
        <Route exact={true} path="/login">
          <div>Login</div>
        </Route>
        <Route exact={true} path="/register">
          <div>Register</div>
        </Route>
      </Suspense>
    </Switch>
  )

  return <Router></Router>;
};

export default AppRouter;
