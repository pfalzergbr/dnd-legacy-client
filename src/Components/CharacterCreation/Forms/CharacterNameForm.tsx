import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ApolloError } from '@apollo/client';
import InputText from '../../UI/FormElements/InputText';

export interface CharacterNameFormProps {
  onSubmit: (data: { name: string }) => void;
  error: ApolloError | undefined;
}

const schema = yup.object().shape({
  name: yup.string().required('Please enter a name'),
});

const CharacterNameForm: React.FC<CharacterNameFormProps> = ({
  onSubmit,
  error,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });
  const { isValid } = useFormState({ control });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name='name'
        label='Name your Character'
        register={register}
        errors={errors}
      />
      {error && <p role='alert'>{error.message}</p>}
      <button type='submit' disabled={!isValid}>
        Next
      </button>
    </form>
  );
};

export default CharacterNameForm;
