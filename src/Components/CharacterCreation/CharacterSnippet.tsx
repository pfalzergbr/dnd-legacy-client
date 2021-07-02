import { ICharacterSnippet } from '../../Typings/characters';

export interface CharacterSnippetProps {
  characterData: ICharacterSnippet
}
 
const CharacterSnippet: React.FC<CharacterSnippetProps> = ({characterData: {name, characterRace: { raceName }, characterClass  }}) => {
  return ( <div>
    <h1>{name}</h1>
    <div>
      <span>Lvl {characterClass[0].classLevel}</span>
      <br />
      <span>{raceName}</span>
      <br />
      <span>{characterClass[0].className}</span>
    </div>
  </div> );
}
 
export default CharacterSnippet;