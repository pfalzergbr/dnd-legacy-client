
interface AbilityTotalItemProps {
  abilityName: string;
  value: number;
  raceBonus?: number;
}

const AbilityTotalItem: React.FC<AbilityTotalItemProps> = ({ abilityName, value, raceBonus = 0} ) => {
  const total = value;
  return (
    <div>
      <div>
        <h3>{abilityName}:    <span>{total}</span></h3>
   
      </div>
      <div>
        <div>
          <span>Base: </span>
          <span>{value}</span>
        </div>
        <div>
          <span>Race: </span>
          <span>{raceBonus}</span>
        </div>
        <div>
          <span>Bonus: </span>
          <span>todo!</span>
        </div>
      </div>
    </div>
  )
}

export default AbilityTotalItem
