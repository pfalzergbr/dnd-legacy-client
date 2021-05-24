import { ICharacterLink } from '../../Typings/characters';

export interface CharacterListItemProps {
  character: ICharacterLink;
  onDelete: (id: string) => void
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({ character, onDelete }) => {
  // Add handleDelete and delete button
  const { characterId, name, race, level } = character;
  const handleDelete = () => {
    onDelete(characterId)
  }
  return (
    // <li>
      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <span>Lvl {level}</span>
          <span>{race}</span>
          <span>{character.class}</span>
        </div>
            <button onClick={handleDelete}>x</button>
      </div>
    // </li>
  );
};

export default CharacterListItem;
