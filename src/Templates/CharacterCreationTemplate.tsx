import CharacterCreationNav from '../Components/CharacterCreation/CharacterCreationNav';
import CreateCharacter from '../Pages/CharacterCreation/CreateCharacter';

export interface CharacterCreationTemplateProps {
  children?: React.ReactNode;
}

const CharacterCreationTemplate: React.FC<CharacterCreationTemplateProps> = ({ children }) => {
  return (
    <main>
      <CharacterCreationNav />
      <CreateCharacter />
    </main>
  );
};

export default CharacterCreationTemplate;
