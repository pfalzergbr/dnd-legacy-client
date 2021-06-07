import { NavLink } from "react-router-dom";

export interface CharacterCreationNavProps {}

const dummyLinks = [
  { 
    name: 'Race',
    to: '/create-character/choose-race',
    active: true
  },
  { 
    name: 'Class',
    to: '/create-character/choose-class',
    active: false
  },
  { 
    name: 'Abilities',
    to: '/create-character/abilities',
    active: false
  },
  { 
    name: 'Skills',
    to: '/create-character/skills',
    active: false
  },
  { 
    name: 'Feats',
    to: '/create-character/choose-feats',
    active: false
  },
  { 
    name: 'Description',
    to: '/create-character/description',
    active: false
  },
  { 
    name: 'Equipment',
    to: '/create-character/equipment',
    active: false
  },
]

const CharacterCreationNav: React.FC<CharacterCreationNavProps> = () => {
  return (
    <nav>
      {dummyLinks.map(link => link.active ? <NavLink to={link.to}>{link.name}</NavLink> : <span>{link.name}</span>)}
      {/* <button>Race</button>
      <button>Class</button>
      <button>Abilities</button>
      <button>Skills</button>
      <button>Feats</button>
      <button>Description</button>
      <button>Equipment</button> */}
    </nav>
  );
};
export default CharacterCreationNav;
