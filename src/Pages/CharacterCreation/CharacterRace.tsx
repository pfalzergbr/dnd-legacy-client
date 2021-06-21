import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import Loading from '../../Components/Loading';
import DropdownGroup from '../../Components/UI/Dropdown/DropdownGroup';
import { GET_CHARACTER_BY_ID } from '../../GraphQL/characterQueries';
import { GET_RACES } from '../../GraphQL/raceQueries';

export interface CharacterRaceProps {}

const CharacterRace: React.FC<CharacterRaceProps> = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const { loading: characterLoading, error: characterError, data: characterData } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: characterId },
  });
  const { loading: racesLoading, error: racesError, data: racesData } = useQuery(GET_RACES);
  
  

  if (characterLoading || racesLoading) {
    return <Loading />;
  }

  if (characterError) {
    return <p>Error. Character not found.</p>;
  }

  if (racesError) {
    return <p>Error. Races not found</p>
  }

  const { name } = characterData.getCharacterById;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Pick a race</h3>
      <DropdownGroup items={racesData.getAllRaces} />
    </div>
  );
};

export default CharacterRace;
