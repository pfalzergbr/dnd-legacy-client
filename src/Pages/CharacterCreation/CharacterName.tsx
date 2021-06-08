import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import CharacterNameForm from '../../Components/CharacterCreation/Forms/CharacterNameForm';
import { CREATE_CHARACTER } from '../../GraphQL/characterMutations';
import { GET_CHARACTERS } from '../../GraphQL/characterQueries'
import Loading from '../../Components/Loading';

export interface CharacternameProps {}

const Charactername: React.FC<CharacternameProps> = () => {
  const history = useHistory();
  const [createCharacter, { loading, error }] = useMutation(CREATE_CHARACTER, {
    onCompleted: (data) => {
      history.push(`/create-character/${data.createCharacter.id.toString()}/choose-race`);
    },
    onError: (error) => console.log(error.message),
  });

  const onSubmit = (data: { name: string }) => {
    createCharacter({
      variables: {
        name: data.name,
      },
      refetchQueries: [
        {query: GET_CHARACTERS}
      ]
    });
  };

  if (loading) return <Loading />;

  return (
    <div>
      <CharacterNameForm onSubmit={onSubmit} error={error} />
    </div>
  );
};

export default Charactername;
