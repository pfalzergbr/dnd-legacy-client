import { IMarkedCharacter } from '../../../Typings/characters';

export interface DeleteCharacterProps {
  character: IMarkedCharacter;
  closeDeleteModal: () => void
  onDelete: (id: string) => void
}

const DeleteCharacter: React.FC<DeleteCharacterProps> = ({character: {name, characterId}, closeDeleteModal, onDelete}) => {
  const handleDelete = () => {
    onDelete(characterId)
    closeDeleteModal()
  }

  return (
    <div>
      <h3>Delete {name}?</h3>
      <p>
        Once a character sheet is deleted, you will not be able to recover it.
      </p>
      <div>
        <button onClick={closeDeleteModal}>cancel</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
};

export default DeleteCharacter;
