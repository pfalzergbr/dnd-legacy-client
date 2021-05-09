import { Link } from 'react-router-dom';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';
import { useShowPassword } from '../Hooks/useShowPassword';

//TODO - Add error message after failed request

export interface LoginProps {}

interface LoginInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('That’s not a valid email address. It should contain a @').email('That’s not a valid email address. It should contain a @'),
  password: yup.string().required('required field - need a validation feedback message here! :)'),
});

const Login: React.FC<LoginProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  });
  const { isValid } = useFormState({ control });
  const {isVisible, toggleVisible} = useShowPassword(false)

  const onSubmit = (data: LoginInputs) => {
    alert(`email: ${data.email}, password: ${data.password}`);
  };

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
          <input type={isVisible ? 'text':'password'} id='password' {...register('password')} />
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
