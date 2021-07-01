import AbilityMethods from "../../Components/CharacterCreation/AbilityMethod";
export interface CharacterAbilitiesProps {}

const CharacterAbilities: React.FC<CharacterAbilitiesProps> = () => {
  return (
    <div>
      <h2>Abilities</h2>
      <AbilityMethods />
    </div>
  );
};

export default CharacterAbilities;
