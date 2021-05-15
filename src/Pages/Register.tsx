import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// Context
import { AuthActions } from '../Context/AuthContext';
// Apollo Client
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../GraphQL/authMutations';
// Components
import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';
import Loading from '../Components/Loading';
//Types
import { UserInput } from '../Typings/inputs';

import './temp-css.css';
import RegisterForm from '../Components/Auth/Forms/RegisterForm';

const Register: React.FC = () => {
  const history = useHistory();
  const { handleLogin } = useContext(AuthActions);
  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      handleLogin(data.createUser);
      history.push('/home');
    },
    onError: (error) => console.log(error.message),
  });

  const onSubmit = (userData: UserInput) => {
    createUser({
      variables: {
        data: userData,
      },
    });
  };

  if (loading) return <Loading />;

  return (
    <AuthTemplate>
      <AuthHeader />
      <RegisterForm onSubmit={onSubmit} error={error} />
    </AuthTemplate>
  );
};

export default Register;
