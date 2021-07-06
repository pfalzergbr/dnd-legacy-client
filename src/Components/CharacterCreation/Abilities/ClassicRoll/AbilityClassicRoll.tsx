import { useAbilityRoll } from '../../../../Hooks/useAbilityRoll';
import { useRollingState } from '../../../../Hooks/useRollingState';
import AbilityHeader from '../AbilityHeader';
import AbilityRollStart from './AbilityRollStart';
import AbilityRollResults from './AbilityRollResults';

export interface AbilityClassicRollProps {}

const AbilityClassicRoll: React.FC<AbilityClassicRollProps> = () => {
  const { isRolling, firstRollDone, startRoll } = useRollingState();
  const { rollResult, rollAbilities } = useAbilityRoll(); 

  const handleRoll = () => {
    startRoll();
    rollAbilities();
  }

  const beforeFirstRoll = !firstRollDone && !isRolling;
  const afterFirstRoll = firstRollDone && !isRolling;

  return (
    <div>
      <AbilityHeader />
      {beforeFirstRoll && <AbilityRollStart handleRoll={handleRoll} />}
      {isRolling && <p>Rolling...</p>}
      {afterFirstRoll && <AbilityRollResults abilityValues={rollResult} handleRoll={handleRoll} />}
    </div>
  );
};

export default AbilityClassicRoll;
