import { useEffect } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserInput } from '../../../Typings/inputs';
import { ApolloError } from '@apollo/client';
import InputText from '../../UI/FormElements/InputText';
import InputPassword from '../../UI/FormElements/InputPassword';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    trigger,
  } = useForm<UserInput>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { isValid } = useFormState({ control });
  const watchPassword = watch('password');

  useEffect(() => {
    if (watchPassword?.length >= 8) {
      trigger();
    }
  }, [watchPassword, trigger]);

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
      <button type='submit' disabled={isValid ? false : true}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
