
export interface CharacterCreationNavProps {}

const CharacterCreationNav: React.FC<CharacterCreationNavProps> = () => {
  return (
    <nav style={{backgroundColor: 'grey'}}>
      <button>Race</button>
      <button>Class</button>
      <button>Abilities</button>
      <button>Skills</button>
      <button>Feats</button>
      <button>Description</button>
      <button>Equipment</button>
    </nav>
  );
};
export default CharacterCreationNav;
