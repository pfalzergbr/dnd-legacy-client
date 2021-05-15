import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';
import { useShowPassword } from '../../../Hooks/useShowPassword';

// TODO - figure out how to get rid of any here

export interface InputPasswordProps<T> {
  label?: string;
  name?: string;
  register: UseFormRegister<T>;
  errors: DeepMap<T, FieldError>;
}

const InputPassword: React.FC<InputPasswordProps<any>> = ({
  label = 'Password',
  name = 'password',
  register,
  errors,
}) => {
  const { isVisible, toggleVisible } = useShowPassword(false);

  return (
    <div className='formControl'>
      <label htmlFor={name}>{label}</label>
      <input
        type={isVisible ? 'text' : 'password'}
        id={name}
        {...register(name)}
      />
      <button onClick={toggleVisible}>Show</button>
      <p role='alert'>{errors[name]?.message}</p>
    </div>
  );
};

export default InputPassword;
