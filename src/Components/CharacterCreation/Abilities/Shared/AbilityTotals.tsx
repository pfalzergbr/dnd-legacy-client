import { useContext } from 'react';
import { AbilityContext } from '../../../../Context/AbilityContext';
import AbilityTotalItem from './AbilityTotalItem';

interface AbilityTotalsProps {

}

const AbilityTotals: React.FC<AbilityTotalsProps> = ( ) => {
  const { abilityState: {abilities} } = useContext(AbilityContext)
  return (
    <div>
      <AbilityTotalItem abilityName="Strength" value={abilities.strength}/>
      <AbilityTotalItem abilityName="Dexterity" value={abilities.dexterity}/>
      <AbilityTotalItem abilityName="Constitution" value={abilities.constitution}/>
      <AbilityTotalItem abilityName="Intelligence" value={abilities.intelligence}/>
      <AbilityTotalItem abilityName="Charisma" value={abilities.charisma}/>
      <AbilityTotalItem abilityName="Wisdom" value={abilities.wisdom}/>
    </div>
  )
}

export default AbilityTotals
