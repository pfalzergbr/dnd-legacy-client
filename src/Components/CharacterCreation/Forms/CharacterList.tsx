import { ICharacterLink } from '../../../Typings/characters';
import CharacterListItem from '../CharacterListItem';

export interface ChracterListProps {
  characters: ICharacterLink[];
}

const ChracterList: React.FC<ChracterListProps> = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => (
        <CharacterListItem character={character} key={character.characterId} />
      ))}
    </ul>
  );
};

export default ChracterList;
