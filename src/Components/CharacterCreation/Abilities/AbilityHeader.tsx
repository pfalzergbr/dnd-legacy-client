import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

export interface AbilityHeaderProps {
}
 
const AbilityHeader: React.FC<AbilityHeaderProps> = () => {
  const { characterId } = useParams<{ characterId: string }>();

  return ( <div>
    <h2>Ability Scores</h2>
    <Link to={`/create-character/${characterId}/abilities`}>Back to methods</Link>
  </div> );
}
 
export default AbilityHeader;