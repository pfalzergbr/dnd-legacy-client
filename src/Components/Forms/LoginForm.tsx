import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { useShowPassword } from '../../Hooks/useShowPassword';
import { UserInput } from '../../Typings/inputs';
import { ApolloError } from '@apollo/client';
import InputText from '../UI/FormElements/InputText';
import InputPassword from '../UI/FormElements/InputPassword';

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
        label='Password'
        register={register}
        errors={errors}
      />
      {error && <p role='alert'>{error.message}</p>}
      <button disabled={!isValid}>Log In</button>
    </form>
  );
};

export default LoginForm;
