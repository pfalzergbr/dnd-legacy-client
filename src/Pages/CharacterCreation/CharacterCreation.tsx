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
  const { characterId } = useParams<{ characterId: string }>();
  const { loading: characterLoading, error: characterError, data: characterData } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: characterId },
  });
    

  // Add route protection for non-active routes

  if (characterLoading) {
    return <Loading />;
  }

  if (characterError) {
    return <p>Character not found.</p>;
  }

  const { links, nextLink } = characterData?.getCharacterById.charCreationProgress;

  return (
    <main>
      <CharacterCreationNav links={links} id={characterId} />
      <CreateCharacterRouter
        nextLink={`/create-character/${characterId}/${nextLink}`}
      />
    </main>
  );
};

export default CharacterCreation;
