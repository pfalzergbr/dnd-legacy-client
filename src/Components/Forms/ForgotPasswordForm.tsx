import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ForgotInputs } from '../../Typings/inputs';

export interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotInputs) => void
}
 
const schema = yup.object().shape({
  email: yup
    .string()
    .required('That’s not a valid email address. It should contain a @')
    .email('That’s not a valid email address. It should contain a @'),
});

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({onSubmit}) => {
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

  return ( <form onSubmit={handleSubmit(onSubmit)}>
  <div className='formControl'>
    <label htmlFor='email'>E-mail</label>
    <input type='text' id='email' {...register('email')} />
    <p role='alert'>{errors.email?.message}</p>
  </div>
  <button disabled={!isValid}>Send it</button>
</form> );
}
 
export default ForgotPasswordForm;