import { useContext } from 'react';
import { AbilityContext } from '../../../../Context/AbilityContext';
import AbilityTotalItem from './AbilityTotalItem';

interface AbilityTotalsProps {

}

const AbilityTotals: React.FC<AbilityTotalsProps> = ( ) => {
  const { abilityState: {abilities} } = useContext(AbilityContext)
  return (
    <div>
      <AbilityTotalItem abilityName="Strength" value={abilities.strength.value}/>
      <AbilityTotalItem abilityName="Dexterity" value={abilities.dexterity.value}/>
      <AbilityTotalItem abilityName="Constitution" value={abilities.constitution.value}/>
      <AbilityTotalItem abilityName="Intelligence" value={abilities.intelligence.value}/>
      <AbilityTotalItem abilityName="Charisma" value={abilities.charisma.value}/>
      <AbilityTotalItem abilityName="Wisdom" value={abilities.wisdom.value}/>
    </div>
  )
}

export default AbilityTotals
