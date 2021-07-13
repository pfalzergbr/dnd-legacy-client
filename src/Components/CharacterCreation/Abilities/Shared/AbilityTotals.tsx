import { useContext } from 'react';
import { AbilityContext } from '../../../../Context/AbilityContext';
import AbilityTotalItem from './AbilityTotalItem';

interface AbilityTotalsProps {

}

// TODO - Decrease the coupleing here! Not reusable at this form.
const AbilityTotals: React.FC<AbilityTotalsProps> = ( ) => {
  const { abilityState: {abilities} } = useContext(AbilityContext)
  return (
    <div>
      <AbilityTotalItem abilityName="Strength" ability={abilities.strength}/>
      <AbilityTotalItem abilityName="Dexterity" ability={abilities.dexterity}/>
      <AbilityTotalItem abilityName="Constitution" ability={abilities.constitution}/>
      <AbilityTotalItem abilityName="Intelligence" ability={abilities.intelligence}/>
      <AbilityTotalItem abilityName="Charisma" ability={abilities.charisma}/>
      <AbilityTotalItem abilityName="Wisdom" ability={abilities.wisdom}/>
    </div>
  )
}

export default AbilityTotals
