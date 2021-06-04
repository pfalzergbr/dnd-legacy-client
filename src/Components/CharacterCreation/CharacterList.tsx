import { useState } from 'react';
import Modal from 'react-modal';
import { useMutation } from '@apollo/client';
import {
  DELETE_CHARACTER,
  GET_CHARACTERS,
} from '../../GraphQL/characterMutations';
import { ICharacterLink, IMarkedCharacter } from '../../Typings/characters';
import Loading from '../Loading';
import CharacterListItem from './CharacterListItem';
import DeleteCharacter from './DeleteCharacter';
import { Link } from 'react-router-dom';

export interface ChracterListProps {
  characters: ICharacterLink[];
}

const ChracterList: React.FC<ChracterListProps> = ({ characters }) => {
  const [deleteCharacter, { loading }] = useMutation(DELETE_CHARACTER);
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
  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeDeleteModal}>
        <DeleteCharacter character={markedCharacter}
        closeDeleteModal={closeDeleteModal} 
        onDelete={onDelete}/>
      </Modal>
      <ul>
        {characters.map((character) => (
          <Link to="/create-character">
          <CharacterListItem
            character={character}
            onDelete={onDelete}
            key={character.characterId}
            openDeleteModal={openDeleteModal}
            />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ChracterList;
