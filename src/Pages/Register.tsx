import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';
import { useValidation } from '../Hooks/useValidation';
import { useShowPassword } from '../Hooks/useShowPassword';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../GraphQL/authMutations';
import { UserInput } from '../Typings/inputs';
import Loading from '../Components/Loading';

import './temp-css.css';



const schema = yup.object().shape({
  email: yup
    .string()
    .required('That’s not a valid email address. It should contain a @')
    .email('That’s not a valid email address. It should contain a @'),
  password: yup
    .string()
    .required()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<UserInput>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { isValid } = useFormState({ control });
  const watchPassword = watch('password');
  const {
    validationState: { length, symbol, number, upperCase, lowerCase },
  } = useValidation(watchPassword);
  const { isVisible, toggleVisible } = useShowPassword(false);
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const onSubmit = (userData: UserInput) => {
    createUser({
      variables: {
        data: userData,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  if (loading) return <Loading />;

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
          <label htmlFor='password'>Create Password</label>
          <input
            type={isVisible ? 'text' : 'password'}
            id='password'
            {...register('password')}
          />
          <button onClick={toggleVisible}>Show</button>
          {/* <p role='alert'>{errors.password?.message}</p> */}
          <ul>
            <li className={length ? 'verified' : ''}>At least 8 characters</li>
            <li className={symbol ? 'verified' : ''}>Symbol</li>
            <li className={upperCase ? 'verified' : ''}>Uppercase letter</li>
            <li className={lowerCase ? 'verified' : ''}>Lowercase letter</li>
            <li className={number ? 'verified' : ''}>A number</li>
          </ul>
        </div>
        <button disabled={!isValid}>Register</button>
      </form>
    </AuthTemplate>
  );
};

export default Register;
