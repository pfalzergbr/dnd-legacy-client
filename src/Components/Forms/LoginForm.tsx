import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useShowPassword } from '../../Hooks/useShowPassword';
import { UserInput } from '../../Typings/inputs';
import { ApolloError } from '@apollo/client';

export interface LoginFormProps {
  onSubmit: (loginData: UserInput) => Promise<void>;
  error: ApolloError | undefined;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('That’s not a valid email address. It should contain a @')
    .email('That’s not a valid email address. It should contain a @'),
  password: yup
    .string()
    .required('required field - need a validation feedback message here! :)'),
});

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {
  // React Hook Form
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

  return (
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
        {error && <p role='alert'>{error.message}</p>}
      </div>
      <button disabled={!isValid}>Log In</button>
    </form>
  );
};

export default LoginForm;
