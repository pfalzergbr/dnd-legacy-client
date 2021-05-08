import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from '../Pages/Start';
import Loading from '../Components/Loading';
import NotFound from '../Pages/NotFound';

const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Login'));

const AppRouter = () => {
  const publicRoutes = (
    <Switch>
      <Suspense fallback={<Loading />}>
        <Route exact={true} path='/'>
          <Start />
        </Route>
        <Route exact={true} path='/login'>
          <Login />
        </Route>
        <Route exact={true} path='/register'>
          <Register />
        </Route>
      </Suspense>
    </Switch>
  );

  return <Router></Router>;
};

export default AppRouter;
