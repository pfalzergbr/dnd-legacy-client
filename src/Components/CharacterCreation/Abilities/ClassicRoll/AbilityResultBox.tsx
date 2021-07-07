import AbilityDropContainer from '../../../UI/DragDrop/AbilityDropContainer';
import AbilityDrag from '../../../UI/DragDrop/AbilityDrag';

export interface AbilityResultBoxProps {
  result: number;
  index: number;
}

const AbilityResultBox: React.FC<AbilityResultBoxProps> = ({ result, index }) => {
  return (
    <div>
      {result && result !== 0? <AbilityDrag value={result} isBaseResult={true} index={index}/> : <AbilityDropContainer index={index} />}
    </div>
  );
};

export default AbilityResultBox;
