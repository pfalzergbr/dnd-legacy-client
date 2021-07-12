import { useContext } from 'react';
import AbilityDropFields from './AbilityDropFields';
import AbilityTotals from '../Shared/AbilityTotals';
import Loading from '../../../Loading';
import { AbilityActions, AbilityStates } from '../../../../Context/AbilityContext';
import { useParams } from 'react-router-dom';
export interface AbilityResultsProps {
}

const AbilityResults: React.FC<AbilityResultsProps> = () => {
  const { characterId } = useParams<{ characterId: string }>()
  const { loading, error} = useContext(AbilityStates);
  const { handleAbilityMutation } = useContext(AbilityActions);
  
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
      <button onClick={handleNext}>Next</button>
      <AbilityTotals />
    </div>
  );
};

export default AbilityResults;
