import { NavLink } from "react-router-dom";
import { ILinkControl } from "../../Typings/UI";

export interface CharacterCreationNavProps {
  links: ILinkControl[];
  id: string;
}

const CharacterCreationNav: React.FC<CharacterCreationNavProps> = ({links, id}) => {
  return (
    <nav>
      {links.map(link => link.active ? <NavLink key={link.name} to={`/create-character/${id}${link.to}`}>{link.name}</NavLink> : <span key={link.name}>{link.name}</span>)}
    </nav>
  );
};
export default CharacterCreationNav;
