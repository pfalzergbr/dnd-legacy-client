import DropdownGroup from '../../Components/UI/Dropdown/DropdownGroup'
import { IDropdownItem } from '../../Typings/UI';

const dummyData: IDropdownItem<string>[] = [
  {
    id: '1',
    title: 'Human',
    details: 'Has no special abilities, which makes him especially angry.'
  },
  {
    id: '2',
    title: 'Elf',
    details: 'Pointy ears, forests, bows and magic. What`s not to like?'
  },
  { 
    id: '3',
    title: 'Halfling',
    details: 'Halflings are clever, capable opportunists. Halfling individuals and clans find room for themselves wherever they can. Often they are strangers and wanderers, and others react to them with suspicion or curiosity. Depending on the clan, halflings might be reliable, hard-working (if clannish) citizens, or they might be thieves just waiting for the opportunity to make a big score and disappear in the dead of night. Regardless, halflings are cunning, resourceful survivors.'
  },
  { 
    id: '4',
    title: 'Half-Elf',
    details: 'Best of two words, For players who cannot decide.'
  }, 
  { 
    id: '5',
    title: 'Dwarf',
    details: 'Strong, compact, comes with a beard and an axe.'
  }, 
  { 
    id: '6',
    title: 'Gnome',
    details: 'It`s not the size that matters, the but the illusion!'
  }, 
  { 
    id: '7',
    title: 'Half- Orc',
    details: 'Whoa, nearly forgot them guys.'
  }, 
]


export interface CharacterRaceProps {}

const CharacterRace: React.FC<CharacterRaceProps> = () => {
  return (
    <div>
      <h2>CharacterName</h2>
      <h3>Pick a race</h3>
      <DropdownGroup items={dummyData} />
    </div>
  );
};

export default CharacterRace;
