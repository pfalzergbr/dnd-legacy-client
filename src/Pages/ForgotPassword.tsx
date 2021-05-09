import { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

//TODO - Add error message after failed request

interface ForgotInputs {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('That’s not a valid email address. It should contain a @')
    .email('That’s not a valid email address. It should contain a @'),
});

const ForgotPassword: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ForgotInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { isValid } = useFormState({ control });
  const history = useHistory();

  const onSubmit = (data: ForgotInputs) => {
    // alert(`email: ${data.email}`);
    setIsSubmitted(true);
  };

  const forgotPasswordForm = (
    <div>
      <h1>Where should we send the email?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formControl'>
          <label htmlFor='email'>E-mail</label>
          <input type='text' id='email' {...register('email')} />
          <p role='alert'>{errors.email?.message}</p>
        </div>
        <button disabled={!isValid}>Send it</button>
      </form>
    </div>
  );

  const successMessage = (
    <div>
      <h1>Password reset email successfully sent.</h1>
      <Link to='/login'>Back to log in</Link>
    </div>
  );

  return (
    <div>
      <button onClick={() => history.goBack()}>x</button>
      {isSubmitted ? successMessage : forgotPasswordForm}
    </div>
  );
};

export default ForgotPassword;
