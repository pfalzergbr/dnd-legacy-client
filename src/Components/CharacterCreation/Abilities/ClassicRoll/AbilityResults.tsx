import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AbilityDropFields from './AbilityDropFields';
import AbilityTotals from '../Shared/AbilityTotals';
import Loading from '../../../Loading';
import { AbilityActions, AbilityContext, AbilityStates } from '../../../../Context/AbilityContext';
export interface AbilityResultsProps {
}

const AbilityResults: React.FC<AbilityResultsProps> = () => {
  const { characterId } = useParams<{ characterId: string }>()
  const { loading, error} = useContext(AbilityStates);
  const { handleAbilityMutation } = useContext(AbilityActions);
  const { abilityState } = useContext(AbilityContext)
  
  const handleNext = () => {
    handleAbilityMutation(characterId);
  }
  
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Cannot set abilities. Please try again.</p>
  }

  return (
    <div>
      <AbilityDropFields />
      <button disabled={!abilityState.isComplete} onClick={handleNext}>Next</button>
      <AbilityTotals />
    </div>
  );
};

export default AbilityResults;
