import { Link } from 'react-router-dom';
import { useContext } from 'react';
// React Hook Form
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useShowPassword } from '../Hooks/useShowPassword';
// Context 
import { AuthActions } from '../Context/AuthContext'
// Apollo Client 
import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../GraphQL/authQueries';
// Components
import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';
import Loading from '../Components/Loading';
//Types
import { UserInput } from '../Typings/inputs';
//TODO - Add error message after failed request

export interface LoginProps {}


const schema = yup.object().shape({
  email: yup
    .string()
    .required('That’s not a valid email address. It should contain a @')
    .email('That’s not a valid email address. It should contain a @'),
  password: yup
    .string()
    .required('required field - need a validation feedback message here! :)'),
});

const Login: React.FC<LoginProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserInput>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { isValid } = useFormState({ control });
  const { isVisible, toggleVisible } = useShowPassword(false);
  const { login } = useContext(AuthActions)
  const [loginQuery, { loading }] = useLazyQuery(LOGIN, { onCompleted: (data) => login(data.login)})

  const onSubmit = async (loginData: UserInput) => {
    loginQuery({variables: {data: loginData}})
  };

  if (loading) return <Loading/>

  return (
    <AuthTemplate>
      <AuthHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formControl'>
          <label htmlFor='email'>E-mail</label>
          <input type='text' id='email' {...register('email')} />
          <p role='alert'>{errors.email?.message}</p>
        </div>
        <div className='formControl'>
          <label htmlFor='password'>Password</label>
          <input
            type={isVisible ? 'text' : 'password'}
            id='password'
            {...register('password')}
          />
          <button onClick={toggleVisible}>Show</button>
          <p role='alert'>{errors.password?.message}</p>
        </div>
        <button disabled={!isValid}>Log In</button>
      </form>
      <footer>
        <Link to='/forgot-password'>I forgot my password</Link>
      </footer>
    </AuthTemplate>
  );
};

export default Login;
