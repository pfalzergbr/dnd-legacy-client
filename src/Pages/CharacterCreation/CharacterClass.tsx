import { useQuery, useMutation } from '@apollo/client';
import { useParams, useHistory } from 'react-router';
import Loading from '../../Components/Loading';
import DropdownGroup from '../../Components/UI/Dropdown/DropdownGroup';
import CharClassDetails from '../../Components/UI/Dropdown/CharClassDetails';
import { GET_CHARACTERS, GET_CHARACTER_BY_ID } from '../../GraphQL/characterQueries';
import { GET_CLASSES } from '../../GraphQL/classQueries';
import { CHOOSE_CLASS } from '../../GraphQL/characterMutations';

export interface CharacterClassProps {}

const CharacterClass: React.FC<CharacterClassProps> = () => {
  const history = useHistory();
  const { characterId } = useParams<{ characterId: string }>();

  const {
    loading: characterLoading,
    error: characterError,
    data: characterData,
  } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: characterId },
  });

  const {
    loading: classesLoading,
    error: classesError,
    data: classesData,
  } = useQuery(GET_CLASSES);

  const [chooseClass, { loading: choiceLoading, error: choiceError }] =
    useMutation(CHOOSE_CLASS, {
      onCompleted: (data) => {
        console.log(data)
        history.push(
          `/create-character/${characterId}/abilities`
        );
      },
    });

  const handleChooseClass = ( classId: string ) => {
    chooseClass({ variables: { characterId, classId }, 
      refetchQueries: [
      {query: GET_CHARACTERS},
      {query: GET_CHARACTER_BY_ID, variables: {id: characterId}}
    ] 
  });
  };


  if (characterLoading || classesLoading || choiceLoading) {
    return <Loading />;
  }

  if (characterError) {
    return <p>Error. Character not found.</p>;
  }

  if (classesError) {
    return <p>Error. Classes not found</p>;
  }

  if (choiceError) {
    return <p>Error. Please try again.</p>;
  }

  const { name } = characterData.getCharacterById;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Pick a Class</h3>
      <DropdownGroup
        items={classesData.getAllClasses}
        contentElement={CharClassDetails}
        chooseItem={handleChooseClass}
      />
    </div>
  );
};

export default CharacterClass;
