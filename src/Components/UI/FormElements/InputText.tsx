import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";


export interface InputTextProps<T> {
  label: string
  name: string
  register: UseFormRegister<T>
  errors: DeepMap<T, FieldError>
}

//TODO - Get rid of 'any'
const InputText: React.FC<InputTextProps<any>> = ({label, name, register, errors}) => {
  return (
    <div className='formControl'>
      <label htmlFor={name}>{label}</label>
      <input type='text' id={name} {...register(name)} />
      <p role='alert'>{errors[name]?.message}</p>
    </div>
  );
};

export default InputText;
