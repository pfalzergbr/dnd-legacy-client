import { useRollingState } from '../../../Hooks/useRollingState';
import AbilityHeader from './AbilityHeader';
import AbilityRollStart from './AbilityRollStart';

export interface AbilityClassicRollProps {}

const AbilityClassicRoll: React.FC<AbilityClassicRollProps> = () => {
  const { isRolling, firstRollDone, startRoll } = useRollingState();
  // const RollingScreen = () => <div>Rolling...</div>;

  const handleRoll = () => {
    startRoll();
  }

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
