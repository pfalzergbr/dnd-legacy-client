import { useState } from 'react';
import Modal from 'react-modal';
import { useMutation } from '@apollo/client';
import { DELETE_CHARACTER } from '../../../GraphQL/characterMutations';
import { GET_CHARACTERS } from '../../../GraphQL/characterQueries';
import { ICharacterLink, IMarkedCharacter } from '../../../Typings/characters';
import Loading from '../../Loading';
import CharacterListItem from './CharacterListItem';
import DeleteCharacter from './DeleteCharacter';

export interface CharacterListProps {
  characters: ICharacterLink[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const [deleteCharacter, { loading, error }] = useMutation(DELETE_CHARACTER);
  const [markedCharacter, setMarkedCharacter] = useState<IMarkedCharacter>({
    name: '',
    characterId: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDelete = (id: string) => {
    deleteCharacter({
      variables: {
        id,
      },
      refetchQueries: [{ query: GET_CHARACTERS }],
    });
  };

  const openDeleteModal = (character: IMarkedCharacter) => {
    setMarkedCharacter(character);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <p>Internet demons rolled a critical against you. Looks like an error!</p>
    );
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeDeleteModal}>
        <DeleteCharacter
          character={markedCharacter}
          closeDeleteModal={closeDeleteModal}
          onDelete={onDelete}
        />
      </Modal>
      <ul>
        {characters.map((character) => (
          <CharacterListItem
            character={character}
            onDelete={onDelete}
            key={character.characterId}
            openDeleteModal={openDeleteModal}
          />
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
