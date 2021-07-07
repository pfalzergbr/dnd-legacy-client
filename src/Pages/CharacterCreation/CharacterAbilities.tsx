import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_ABILITIES_SNIPPET } from '../../GraphQL/characterQueries';
import GenerateAbilityRouter from '../../Routers/GenerateAbilityRouter';

import CharacterSnippet from '../../Components/CharacterCreation/CharacterSnippet';
import Loading from '../../Components/Loading';
import { ICharacterSnippet } from '../../Typings/characters';

export interface CharacterAbilitiesProps {}

const CharacterAbilities: React.FC<CharacterAbilitiesProps> = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const { data, loading, error } = useQuery(GET_CHARACTER_ABILITIES_SNIPPET, {
    variables: { id: characterId },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error. Character not found.</p>;
  }

  return (
    <div>
      <CharacterSnippet
        characterData={data.getCharacterById as ICharacterSnippet}
      />
      <GenerateAbilityRouter />
    </div>
  );
};

export default CharacterAbilities;
