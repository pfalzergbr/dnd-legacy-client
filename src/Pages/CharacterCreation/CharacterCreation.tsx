import CharacterCreationNav from '../../Components/CharacterCreation/CharacterCreationNav';
import CreateCharacterRouter from '../../Routers/CreateCharacterRouter';
import { ILinkControl } from '../../Typings/UI';

export interface CharacterCreationProps {
  children?: React.ReactNode;
}

const linkControls: {nextLink: string, dummyLinks: ILinkControl[]} = {
  nextLink: '/create-character/choose-race',
  dummyLinks: [
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
}

const CharacterCreation: React.FC<CharacterCreationProps> = () => {
  return (
    <main>
      <CharacterCreationNav links={linkControls.dummyLinks}/>
      <CreateCharacterRouter nextLink={linkControls.nextLink} />
    </main>
  );
};

export default CharacterCreation;
