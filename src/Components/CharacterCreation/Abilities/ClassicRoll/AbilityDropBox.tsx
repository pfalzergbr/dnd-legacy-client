import { useState } from 'react';
import AbilityDrag from '../../../UI/DragDrop/AbilityDrag';
import AbilityDropZone from '../../../UI/DragDrop/AbilityDropZone';

export interface AbilityDropBoxProps {
  label: string;
}

const AbilityDropBox: React.FC<AbilityDropBoxProps> = ({ label }) => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <div style={{ margin: '1rem', width: '150px' }}>
      <h4>{label}</h4>
      {value ? (
        <AbilityDrag value={value} setValue={setValue} />
      ) : (
        <AbilityDropZone setValue={setValue} />
      )}
    </div>
  );
};

export default AbilityDropBox;
