import { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from '../Pages/Start';
import Loading from '../Components/Loading';
import NotFound from '../Pages/NotFound';
import RouteWithSuspense from './RouteWithSuspense'

const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));

const AppRouter = () => {
  const publicRoutes = (
    <Switch>
      <Route exact path='/'>
        <Start />
      </Route>
      <RouteWithSuspense fallback={<Loading />} path='/login'>
          <Login />
      </RouteWithSuspense>
      <RouteWithSuspense fallback={<Loading />} path='/register'>
          <Register />
      </RouteWithSuspense>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );

  return (
    <>
      <Router>
        {publicRoutes}
      </Router>
    </>
  );
};

export default AppRouter;
