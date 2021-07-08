
interface AbilityTotalItemProps {
  abilityName: string;
  value: number;
  raceBonus: number;
}

const AbilityTotalItem: React.FC<AbilityTotalItemProps> = ({ abilityName, value, raceBonus} ) => {
  const total = value;
  return (
    <div>
      <div>
        <h3>{abilityName}</h3>
        <span>{total}</span>
      </div>
      <div>
        <div>
          <span>Base</span>
          <span>{value}</span>
        </div>
        <div>
          <span>Race</span>
          <span>{raceBonus}</span>
        </div>
      </div>
    </div>
  )
}

export default AbilityTotalItem
