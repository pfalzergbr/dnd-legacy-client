import { useMutation } from '@apollo/client';
import {
  DELETE_CHARACTER,
  GET_CHARACTERS,
} from '../../GraphQL/characterMutations';
import { ICharacterLink } from '../../Typings/characters';
import Loading from '../Loading';
import CharacterListItem from './CharacterListItem';

export interface ChracterListProps {
  characters: ICharacterLink[];
}

const ChracterList: React.FC<ChracterListProps> = ({ characters }) => {
  const [deleteCharacter, { loading }] = useMutation(DELETE_CHARACTER);

  const onDelete = (id: string) => {
    deleteCharacter({
      variables: {
        id,
      },
      refetchQueries: [{ query: GET_CHARACTERS }],
    });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <ul>
      {characters.map((character) => (
        <CharacterListItem
          character={character}
          onDelete={onDelete}
          key={character.characterId}
        />
      ))}
    </ul>
  );
};

export default ChracterList;
