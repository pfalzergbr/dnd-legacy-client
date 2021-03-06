import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';
import { useShowPassword } from '../../../Hooks/useShowPassword';


export interface InputPasswordProps<T> {
  label?: string;
  name?: string;
  register: UseFormRegister<T>;
  errors: DeepMap<T, FieldError>;
  validationMessage?: boolean;
}

// TODO - figure out how to get rid of any here
const InputPassword: React.FC<InputPasswordProps<any>> = ({
  label = 'Password',
  name = 'password',
  register,
  errors,
  validationMessage = true
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
      <button type="button" onClick={toggleVisible}>Show</button>
      {validationMessage && <p role='alert'>{errors[name]?.message}</p>}
    </div>
  );
};

export default InputPassword;
