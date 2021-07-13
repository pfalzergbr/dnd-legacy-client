import { AbilityItemType } from './AllocatedAbilities';

export interface AbilityItemProps {
  abilityName: string;
  abilityItem: AbilityItemType;
}

const AbilityItem: React.FC<AbilityItemProps> = ({
  abilityName,
  abilityItem,
}) => {
  const { finalValue, baseValue, modifier, statModifiers } = abilityItem;

  const bonusStyle =
    modifier !== 0
      ? modifier >= 0
        ? { color: 'green' }
        : { color: 'red' }
      : {};


  const getRacialModifier = (): number  => {
    const racialModifier = statModifiers.find(modifier => modifier.modifierSource === 'race')
    if (racialModifier) {
      return racialModifier.modifierValue
    }
    return 0
  }

  return (
    <div>
      <h3>{abilityName}</h3>
      <div>
        <div>
          <span>Base: </span>
          <span>{baseValue}</span>
        </div>
        <div>
          <span>Race: {getRacialModifier()}</span>
          <span></span>
        </div>
        <div>
          <span>Modifier: </span>
          <span style={bonusStyle}>
            {modifier > 0 && '+'}
            {modifier}
          </span>
        </div>
        <div>
          <span>Total: </span>
          <span>{finalValue}</span>
        </div>
      </div>
    </div>
  );
};

export default AbilityItem;
