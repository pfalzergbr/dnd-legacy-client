import AbilityDropFields from './AbilityDropFields';
import AbilityTotals from '../Shared/AbilityTotals';

export interface AbilityResultsProps {
}

const AbilityResults: React.FC<AbilityResultsProps> = () => {
  return (
    <div>
      <AbilityDropFields />
      <button>Next</button>
      <AbilityTotals />
    </div>
  );
};

export default AbilityResults;
