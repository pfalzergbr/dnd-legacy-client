import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import CharacterCreationNav from '../../Components/CharacterCreation/CharacterCreationNav';
import Loading from '../../Components/Loading';
import CreateCharacterRouter from '../../Routers/CreateCharacterRouter';
import { GET_CHARACTER_BY_ID } from '../../GraphQL/characterQueries';

export interface CharacterCreationProps {
  children?: React.ReactNode;
}

const CharacterCreation: React.FC<CharacterCreationProps> = () => {
  const { characterId } = useParams<{characterId: string}>() 
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID , {variables: {id: characterId}});
  
  // Add route protection for non-active routes
  
  if (loading) {
    return <Loading />
  }
  
  if (error) {
    return <p>Error</p>
  }
  
  const { charCreationProgress } = data?.getCharacterById


  return (
    <main>
      <CharacterCreationNav links={charCreationProgress.links}/>
      <CreateCharacterRouter nextLink={`/create-character/${characterId}/${charCreationProgress.nextLink}`} />
    </main>
  );
};

export default CharacterCreation;
