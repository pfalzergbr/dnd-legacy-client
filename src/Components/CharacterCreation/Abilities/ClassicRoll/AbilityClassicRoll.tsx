import { useContext } from 'react';
import { useRollingState } from '../../../../Hooks/useRollingState';
import AbilityHeader from '../Shared/AbilityHeader';
import AbilityRollStart from './AbilityRollStart';
import AbilityRollResults from './AbilityRollResults';
import {
  AbilityContext,
  AbilityActions,
  AbilityStates,
} from '../../../../Context/AbilityContext';
import Loading from '../../../Loading';

export interface AbilityClassicRollProps {}

const AbilityClassicRoll: React.FC<AbilityClassicRollProps> = () => {
  const { isRolling, firstRollDone, startRoll } = useRollingState();
  const { rollResult } = useContext(AbilityContext);
  const { rollAbilities } = useContext(AbilityActions);
  const { loading, error} = useContext(AbilityStates);

  const beforeFirstRoll = !firstRollDone && !isRolling;
  const afterFirstRoll = firstRollDone && !isRolling;

  const handleRoll = () => {
    startRoll();
    rollAbilities();
  };

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Cannot set abilities. Please try again.</p>
  }

  return (
    <div>
      <AbilityHeader />
      {beforeFirstRoll && <AbilityRollStart handleRoll={handleRoll} />}
      {isRolling && <p>Rolling...</p>}
      {afterFirstRoll && (
        <AbilityRollResults
          abilityValues={rollResult}
          handleRoll={handleRoll}
        />
      )}
    </div>
  );
};

export default AbilityClassicRoll;
