import CharacterCreationNav from '../Components/CharacterCreation/CharacterCreationNav';

export interface CharacterCreationTemplateProps {
  children?: React.ReactNode;
}

const CharacterCreationTemplate: React.FC<CharacterCreationTemplateProps> = ({ children }) => {
  return (
    <main>
      <CharacterCreationNav />
      {children}
    </main>
  );
};

export default CharacterCreationTemplate;
