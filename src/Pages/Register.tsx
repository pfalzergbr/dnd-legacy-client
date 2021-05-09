import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';
import { useValidation } from '../Hooks/useValidation';

interface RegisterInputs {
  email: string;
  password: string;
}

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
  } = useForm<RegisterInputs>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { isValid } = useFormState({ control });
  const onSubmit = (data: RegisterInputs) => {
    alert(`email: ${data.email}, password: ${data.password}`);
  };
  const watchPassword = watch('password');
  const { validationState } = useValidation(watchPassword);
  const { length, symbol} = validationState;

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
          <input type='password' id='password' {...register('password')} />
          {/* <p role='alert'>{errors.password?.message}</p> */}
          <ul>
            <li className={length ? 'verified' : ''}>At least 8 characters</li>
            <li className={symbol ? 'verified' : ''}>Symbol</li>
            <li>Uppercase letter</li>
            <li>Lowercase letter</li>
            <li>A number</li>
          </ul>
        </div>
        <button disabled={!isValid}>Register</button>
      </form>
    </AuthTemplate>
  );
};

export default Register;
