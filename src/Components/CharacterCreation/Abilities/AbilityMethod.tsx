import { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

export interface AbilityMethodsProps {}
const AbilityMethods: React.FC<AbilityMethodsProps> = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const path = `/create-character/${characterId}/abilities`

  const handleSelect = (link: string) => {
    if (selectedOption !== link) setSelectedOption(link);
    else setSelectedOption(null);
  };

  const handleNext = () => {
    if (selectedOption) history.push(selectedOption);
  };

  //REFACTOR - Extract buttons to a reusable component. 

  return (
    <div>
      <h3>Choose Methods</h3>
      <div>
        <button
          type='button'
          onClick={() => handleSelect(`${path}/point-buy`)}
          style={
            selectedOption === `${path}/point-buy`
              ? { border: '1px solid green' }
              : {}
          }
        >
          <h4>Point Buy</h4>
          <p>
            Distribute a set number of points to your liking across abilities
          </p>
        </button>
        <button
          type='button'
          onClick={() => handleSelect(`${path}/classic-roll`)}
          style={
            selectedOption === `${path}/classic-roll`
              ? { border: '1px solid green' }
              : {}
          }
        >
          <h4>Roll 4d6, drop the lowest</h4>
          <p>The classic way of rolling your points.</p>
        </button>
        <button
          type='button'
          onClick={() => handleSelect(`${path}/custom`)}
          style={
            selectedOption === `${path}/custom`
              ? { border: '1px solid green' }
              : {}
          }
        >
          <h4>Custom</h4>
          <p>Total freedom over point allocation.</p>
        </button>
      </div>
      <div>
        <button disabled={!selectedOption} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AbilityMethods;
