import { useState } from 'react';
import AbilityResultBox from "./AbilityResultBox";
import AbilityResultConfirm from './AbilityResultConfirm';
import AbilityDropFields from './AbilityDropFields';

export interface AbilityRollResultsProps {
  abilityValues: number[];
  handleRoll: () => void;
}

const AbilityRollResults: React.FC<AbilityRollResultsProps> = ({handleRoll, abilityValues}) => {
  const [keepResults, setKeepResults] = useState(false);

  const confirmResults = () => {
    setKeepResults(true);
  }

  return (
    <div>
      {!keepResults && <p>Roll 4d6 six times, and always drop the lowest number. </p>}
      <div>
        {abilityValues.map((value, index) => <AbilityResultBox key={index} result={value}/>)}
      </div>
      {keepResults ? <AbilityDropFields />:<AbilityResultConfirm handleRoll={handleRoll} confirmResults={confirmResults}/>}
    </div>
  );
};

export default AbilityRollResults;
