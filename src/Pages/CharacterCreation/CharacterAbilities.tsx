import GenerateAbilityRouter from "../../Routers/GenerateAbilityRouter";
export interface CharacterAbilitiesProps {}

const CharacterAbilities: React.FC<CharacterAbilitiesProps> = () => {
  return (
    <div>
      <h2>Abilities</h2>
      <GenerateAbilityRouter />
    </div>
  );
};

export default CharacterAbilities;
