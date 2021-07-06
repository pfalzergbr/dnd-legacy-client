import { useAbilityRoll } from '../../../Hooks/useAbilityRoll';
import { useRollingState } from '../../../Hooks/useRollingState';
import AbilityHeader from './AbilityHeader';
import AbilityRollStart from './AbilityRollStart';

export interface AbilityClassicRollProps {}

const AbilityClassicRoll: React.FC<AbilityClassicRollProps> = () => {
  const { isRolling, firstRollDone, startRoll } = useRollingState();
  const { rollResult, rollAbilities } = useAbilityRoll(); 
  // const RollingScreen = () => <div>Rolling...</div>;

  const handleRoll = () => {
    startRoll();
    rollAbilities();
  }

  console.log(rollResult)

  const beforeFirstRoll = !firstRollDone && !isRolling;
  const afterFirstRoll = firstRollDone && !isRolling;


  return (
    <div>
      <AbilityHeader />
      {beforeFirstRoll && <AbilityRollStart handleRoll={handleRoll} />}
      {isRolling && <p>Rolling...</p>}
      {afterFirstRoll && <p>Roll done!</p>}
    </div>
  );
};

export default AbilityClassicRoll;
