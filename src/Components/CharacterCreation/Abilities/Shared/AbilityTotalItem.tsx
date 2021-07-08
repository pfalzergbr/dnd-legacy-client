import { AbilityType } from '../../../../Hooks/useAbilitySelect';

interface AbilityTotalItemProps {
  abilityName: string;
  ability: AbilityType;
  raceBonus?: number;
}

const AbilityTotalItem: React.FC<AbilityTotalItemProps> = ({
  abilityName,
  ability,
  raceBonus = 0,
}) => {
  const total = ability.value;

  const bonusStyle =
    ability.bonus !== 0
      ? ability.bonus >= 0
        ? { color: 'green' }
        : { color: 'red' }
      : {};

  return (
    <div>
      <div>
        <h3>
          {abilityName}: <span>{total}</span>
        </h3>
      </div>
      <div>
        <div>
          <span>Base: </span>
          <span>{ability.value}</span>
        </div>
        <div>
          <span>Race: </span>
          <span>{raceBonus}</span>
        </div>
        <div>
          <span>Modifier: </span>
          <span style={bonusStyle}>
            {ability.bonus > 0 && '+'}
            {ability.bonus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AbilityTotalItem;
