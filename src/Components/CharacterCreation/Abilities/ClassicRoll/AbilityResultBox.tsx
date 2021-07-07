import AbilityDropContainer from '../../../UI/DragDrop/AbilityDropContainer';
import AbilityDrag from '../../../UI/DragDrop/AbilityDrag';

export interface AbilityResultBoxProps {
  result: number;
  index: number;
}

const AbilityResultBox: React.FC<AbilityResultBoxProps> = ({ result }) => {
  return (
    <div>
      {result ? <AbilityDrag value={result} /> : <AbilityDropContainer />}
    </div>
  );
};

export default AbilityResultBox;
