import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useValidation } from '../../../Hooks/useValidation';
import { UserInput } from '../../../Typings/inputs';
import InputText from '../../UI/FormElements/InputText';
import InputPassword from '../../UI/FormElements/InputPassword';
import { ApolloError } from '@apollo/client';

export interface RegisterFormProps {
  onSubmit: (userData: UserInput) => void;
  error: ApolloError | undefined;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('That’s not a valid email address. It should contain a @')
    .email('That’s not a valid email address. It should contain a @'),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[£"'`_+-=@$!%*#?&|,.<>()\\{}[\]])[A-Za-z\d£@"'`_+-=$!%*#?&|,.<>(){}\\[\]]{8,}$/ , "Invalid password. It should contain a number, a symbol, an upper and a lower case letter "
    ),
});

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, error }) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name={'email'}
        label={'E-mail'}
        register={register}
        errors={errors}
      />
      <InputPassword
        name='password'
        label='Create Password'
        register={register}
        errors={errors}
      />
      {error && <p role='alert'>{error.message}</p>}
      <ul>
        <li className={length ? 'verified' : ''}>At least 8 characters</li>
        <li className={symbol ? 'verified' : ''}>Symbol</li>
        <li className={upperCase ? 'verified' : ''}>Uppercase letter</li>
        <li className={lowerCase ? 'verified' : ''}>Lowercase letter</li>
        <li className={number ? 'verified' : ''}>A number</li>
      </ul>
      <button disabled={!isValid}>Register</button>
    </form>
  );
};

export default RegisterForm;
