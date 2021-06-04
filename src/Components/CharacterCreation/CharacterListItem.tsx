import { Link } from 'react-router-dom';
import { ICharacterLink, IMarkedCharacter } from '../../Typings/characters';

export interface CharacterListItemProps {
  character: ICharacterLink;
  onDelete: (id: string) => void;
  openDeleteModal: (character: IMarkedCharacter) => void;
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({
  character,
  openDeleteModal,
}) => {
  // Add handleDelete and delete button
  const { characterId, name, race, level } = character;
  const handleDeleteModal = () => {
    openDeleteModal({ characterId, name });
  };
  return (
    // <li>
    <div>
      <Link to='/create-character'>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <span>Lvl {level}</span>
          <span>{race}</span>
          <span>{character.class}</span>
        </div>
      </Link>
      <button onClick={handleDeleteModal}>x</button>
    </div>
    // </li>
  );
};

export default CharacterListItem;
