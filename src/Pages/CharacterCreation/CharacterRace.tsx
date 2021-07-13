import { useQuery, useMutation } from '@apollo/client';
import { useParams, useHistory } from 'react-router';
import Loading from '../../Components/Loading';
import DropdownGroup from '../../Components/UI/Dropdown/DropdownGroup';
import RaceDetails from '../../Components/UI/Dropdown/RaceDetails';
import { GET_CHARACTERS, GET_CHARACTER_BY_ID } from '../../GraphQL/characterQueries';
import { GET_RACES } from '../../GraphQL/raceQueries';
import { CHOOSE_RACE } from '../../GraphQL/characterMutations';

export interface CharacterRaceProps {}

const CharacterRace: React.FC<CharacterRaceProps> = () => {
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
    loading: racesLoading,
    error: racesError,
    data: racesData,
  } = useQuery(GET_RACES);

  const [chooseRace, { loading: choiceLoading, error: choiceError }] =
    useMutation(CHOOSE_RACE, {
      onCompleted: (data) => {
        history.push(
          `/create-character/${characterId}/choose-class`
        );
      },
    });

  const handleChooseRace = ( raceId: string ) => {
    chooseRace({ variables: { characterId, raceId }, refetchQueries: [
      {query: GET_CHARACTERS},
      {query: GET_CHARACTER_BY_ID, variables: {id: characterId}}
    ] });
  };


  if (characterLoading || racesLoading || choiceLoading) {
    return <Loading />;
  }

  if (characterError) {
    return <p>Error. Character not found.</p>;
  }

  if (racesError) {
    return <p>Error. Races not found</p>;
  }

  if (choiceError) {
    return <p>Error. Please try again.</p>;
  }

  const { name } = characterData.getCharacterById;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Pick a race</h3>
      <DropdownGroup
        items={racesData.getAllRaces}
        contentElement={RaceDetails}
        chooseItem={handleChooseRace}
      />
    </div>
  );
};

export default CharacterRace;
