import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// Context
import { AuthActions } from '../Context/AuthContext';
// Apollo Client
import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../GraphQL/authQueries';
// Components
import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';
import Loading from '../Components/Loading';
import LoginForm from '../Components/Forms/LoginForm'
//Types
import { UserInput } from '../Typings/inputs';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  //Router
  const history = useHistory();
  // Auth
  const { handleLogin } = useContext(AuthActions);
  const [loginQuery, { loading, error }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      handleLogin(data.login);
      history.push('/home');
    },
  });

  const onSubmit = async (loginData: UserInput) => {
    loginQuery({ variables: { data: loginData } });
  };

  if (loading) return <Loading />;

  return (
    <AuthTemplate>
      <AuthHeader />
      <LoginForm onSubmit={onSubmit} error={error}/>
      <footer>
        <Link to='/forgot-password'>I forgot my password</Link>
      </footer>
    </AuthTemplate>
  );
};

export default Login;
