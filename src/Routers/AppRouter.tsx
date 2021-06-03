import { useContext } from 'react';
import { lazy } from 'react';
import { useQuery } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthContext, AuthActions } from '../Context/AuthContext';
import Start from '../Pages/Start';
import Loading from '../Components/Loading';
import NotFound from '../Pages/NotFound';
import RouteWithSuspense from './RouteWithSuspense';
import { GET_USER } from '../GraphQL/authQueries';
import AppTemplate from '../Templates/AppTemplate';

const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));
const ForgotPassword = lazy(() => import('../Pages/ForgotPassword'));
const Home = lazy(() => import('../Pages/Home'));
const CharacterName = lazy(
  () => import('../Pages/CharacterCreation/CharacterName')
);
const CreateCharacter = lazy(() => import('../Pages/CharacterCreation/NewCharacter'))

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  const { handleLogin } = useContext(AuthActions);

  const { loading } = useQuery(GET_USER, {
    onCompleted: ({ getUser }) => {
      handleLogin(getUser);
    },
    onError: (error) => {
      // console.log('not logged in')
    },
  });

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
      <Redirect from='/home' to='/' />
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );

  const privateRoutes = (
    <AppTemplate>
      <Switch>
        <RouteWithSuspense fallback={<Loading />} path='/home'>
          <Home />
        </RouteWithSuspense>
        <RouteWithSuspense fallback={<Loading />} path='/character-name'>
          <CharacterName />
        </RouteWithSuspense>
        <RouteWithSuspense fallback={<Loading />} path='/character-name'>
          <CharacterName />
        </RouteWithSuspense>
        <RouteWithSuspense fallback={<Loading />} path='/create-character'>
          <CreateCharacter />
        </RouteWithSuspense>
        <Redirect from='/' to='/home' />
        <Redirect from='/login' to='/home' />
        <Redirect from='/register' to='/home' />
        <Redirect from='/forgot-password' to='/home' />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </AppTemplate>
  );

  if (loading) return <Loading />;

  return (
    <>
      <Router>{isAuth ? privateRoutes : publicRoutes}</Router>
    </>
  );
};

export default AppRouter;
