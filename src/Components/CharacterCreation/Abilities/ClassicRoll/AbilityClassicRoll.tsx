import { useContext } from 'react';
import { useRollingState } from '../../../../Hooks/useRollingState';
import AbilityHeader from '../Shared/AbilityHeader';
import AbilityRollStart from './AbilityRollStart';
import AbilityRollResults from './AbilityRollResults';
import {
  AbilityContext,
  AbilityActions,
} from '../../../../Context/AbilityContext';


export interface AbilityClassicRollProps {}

const AbilityClassicRoll: React.FC<AbilityClassicRollProps> = () => {
  const { isRolling, firstRollDone, startRoll } = useRollingState();
  const { rollResult } = useContext(AbilityContext);
  const { rollAbilities } = useContext(AbilityActions);


  const beforeFirstRoll = !firstRollDone && !isRolling;
  const afterFirstRoll = firstRollDone && !isRolling;

  const handleRoll = () => {
    startRoll();
    rollAbilities();
  };

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
