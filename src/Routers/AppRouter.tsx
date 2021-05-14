import { useContext } from 'react';
import { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Start from '../Pages/Start';
import Loading from '../Components/Loading';
import NotFound from '../Pages/NotFound';
import RouteWithSuspense from './RouteWithSuspense';

const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));
const ForgotPassword = lazy(() => import('../Pages/ForgotPassword'));
const Home = lazy(() => import('../Pages/Home'));

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

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
      <RouteWithSuspense fallback={<Loading />} path='/forgot-password'>
        <ForgotPassword />
      </RouteWithSuspense>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );

  const privateRoutes = (
    <Switch>
      <RouteWithSuspense fallback={<Loading />} path='/home'>
        <Home />
      </RouteWithSuspense>
    </Switch>
  );

  return (
    <>
      <Router>{isAuth ? privateRoutes : publicRoutes}</Router>
    </>
  );
};

export default AppRouter;
