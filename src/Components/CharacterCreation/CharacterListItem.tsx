import { ICharacterLink } from "../../Typings/characters";

export interface CharacterListItemProps {
  character: ICharacterLink
}
 
const CharacterListItem: React.FC<CharacterListItemProps> = ({character}) => {
  // Add handleDelete and delete button
  const { name, race, level} = character
  return ( <li>
    <div>
      <h3>{name}</h3>
      <div>
        <span>Lvl {level}</span>
        <span>{race}</span>
        <span>{character.class}</span>
      </div>
    </div>
  </li> );
}
 
export default CharacterListItem;