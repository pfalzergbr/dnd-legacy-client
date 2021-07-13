import AbilityItem from "./AbilityItem";

export type StatModfier = {
  modifierSource: string;
  modifierValue: number;
  modifierType?: number 
}

export type AbilityItemType = {
  finalValue: number;
  baseValue: number;
  modifier: number;
  statModifiers: StatModfier[];
};

export interface AllocatedAbilitiesProps {
  handleStartAgain: () => void;
  abilities: {
    strength: AbilityItemType;
    dexterity: AbilityItemType;
    constitution: AbilityItemType;
    intelligence: AbilityItemType;
    charisma: AbilityItemType;
    wisdom: AbilityItemType;
  };
}

const AllocatedAbilities: React.FC<AllocatedAbilitiesProps> = ({
  handleStartAgain,
  abilities,
}) => {
  const { strength, dexterity, constitution, intelligence, charisma, wisdom } =
    abilities;

  return (
    <div>
      <h3>Ability Scores</h3>
      <div>
        <p>Don't like these numbers?</p>
        <button onClick={handleStartAgain}>Start again</button>
      </div>
      <div>
        <AbilityItem abilityName='Strength' abilityItem={strength}/>
        <AbilityItem abilityName='Dexterity' abilityItem={dexterity}/>
        <AbilityItem abilityName='Constitution' abilityItem={constitution}/>
        <AbilityItem abilityName='Intelligence' abilityItem={intelligence}/>
        <AbilityItem abilityName='Charisma' abilityItem={charisma}/>
        <AbilityItem abilityName='Wisdom' abilityItem={wisdom}/>
      </div>
    </div>
  );
};

export default AllocatedAbilities;
