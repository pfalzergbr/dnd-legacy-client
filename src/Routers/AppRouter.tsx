import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Start from '../Pages/Start';
import Loading from '../Components/Loading';
import NotFound from '../Pages/NotFound';

const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));

const AppRouter = () => {
  const publicRoutes = (
    <Switch>
      <Route exact path='/'>
        <Start />
      </Route>
      <Route path='/login'>
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      </Route>
      <Route path='/register'>
        <Suspense fallback={<Loading />}>
          <Register />
        </Suspense>
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );

  return (
    <>
      <Router>
        <div className='dummynav'>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </div>
        {publicRoutes}
      </Router>
    </>
  );
};

export default AppRouter;
