import GenerateAbilityRouter from "../../Routers/GenerateAbilityRouter";
import { useParams } from 'react-router';

export interface CharacterAbilitiesProps {}

const CharacterAbilities: React.FC<CharacterAbilitiesProps> = () => {
  const { characterId } = useParams<{ characterId: string }>();
  
  return (
    <div>
      <h2>Abilities</h2>
      <GenerateAbilityRouter />
    </div>
  );
};

export default CharacterAbilities;
