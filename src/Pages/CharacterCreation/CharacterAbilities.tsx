import { useState } from 'react'
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_ABILITIES_SNIPPET } from '../../GraphQL/characterQueries';
import GenerateAbilityRouter from '../../Routers/GenerateAbilityRouter';

import CharacterSnippet from '../../Components/CharacterCreation/CharacterSnippet';
import Loading from '../../Components/Loading';
import AllocatedAbilities from '../../Components/CharacterCreation/Abilities/AllocatedAbilities/AllocatedAbilities';
import { ICharacterSnippet } from '../../Typings/characters';

export interface CharacterAbilitiesProps {}

const CharacterAbilities: React.FC<CharacterAbilitiesProps> = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const { data, loading, error } = useQuery(GET_CHARACTER_ABILITIES_SNIPPET, {
    variables: { id: characterId },
    onCompleted: () => {
      setShowExisingAbilities(data?.getCharacterById.characterAbilities.isAllocated)
    }
  });
  const [ showExistingAbilities, setShowExisingAbilities ] = useState<boolean>(data?.getCharacterById.characterAbilities.isAllocated)

  const handleShowRouter = () => {
    setShowExisingAbilities(false);
  }


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error. Character not found.</p>;
  }

  console.log(data);

  return (
    <div>
      <CharacterSnippet
        characterData={data.getCharacterById as ICharacterSnippet}
      />
      {
        showExistingAbilities ? 
        <AllocatedAbilities handleStartAgain={handleShowRouter}/> :
        <GenerateAbilityRouter /> 

      }
    </div>
  );
};

export default CharacterAbilities;
