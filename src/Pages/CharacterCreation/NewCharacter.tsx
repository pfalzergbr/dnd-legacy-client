import CharacterCreationTemplate from '../../Templates/CharacterCreationTemplate';
import CharacterRace from './CharacterRace';

export interface CreateCharacterProps {}

const CreateCharacter: React.FC<CreateCharacterProps> = () => {
  return (
    <>
      <CharacterCreationTemplate>
        <CharacterRace />
      </CharacterCreationTemplate>
    </>
  );
};

export default CreateCharacter;
