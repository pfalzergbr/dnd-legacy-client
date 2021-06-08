import { NavLink } from "react-router-dom";
import { ILinkControl } from "../../Typings/UI";

export interface CharacterCreationNavProps {
  links: ILinkControl[]
}

const CharacterCreationNav: React.FC<CharacterCreationNavProps> = ({links}) => {
  return (
    <nav>
      {links.map(link => link.active ? <NavLink key={link.name} to={link.to}>{link.name}</NavLink> : <span key={link.name}>{link.name}</span>)}
    </nav>
  );
};
export default CharacterCreationNav;
