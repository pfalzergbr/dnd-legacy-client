import { useState } from 'react';
import AbilityResultBox from './AbilityResultBox';
import AbilityResultConfirm from './AbilityResultConfirm';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import AbilityResults from './AbilityResults';

export interface AbilityRollResultsProps {
  abilityValues: number[];
  handleRoll: () => void;
}

const AbilityRollResults: React.FC<AbilityRollResultsProps> = ({
  handleRoll,
  abilityValues,
}) => {
  const [keepResults, setKeepResults] = useState(false);

  const confirmResults = () => {
    setKeepResults(true);
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {!keepResults && (
          <p>Roll 4d6 six times, and always drop the lowest number. </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {abilityValues.map((value, index) => (
            <AbilityResultBox key={index} result={value} index={index} />
          ))}
        </div>
        {keepResults ? (
          <AbilityResults />
        ) : (
          <AbilityResultConfirm
            handleRoll={handleRoll}
            confirmResults={confirmResults}
          />
        )}
      </DndProvider>
    </div>
  );
};

export default AbilityRollResults;
