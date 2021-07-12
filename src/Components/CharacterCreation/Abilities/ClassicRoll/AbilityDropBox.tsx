import { useState, useEffect, useContext, useMemo } from 'react';
import { AbilityActions } from '../../../../Context/AbilityContext';
import AbilityDrag from '../../../UI/DragDrop/AbilityDrag';
import AbilityDropZone from '../../../UI/DragDrop/AbilityDropZone';
import { DispatchType } from '../../../../Hooks/useAbilitySelect/types';

export interface AbilityDropBoxProps {
  label:
    | 'Strength'
    | 'Dexterity'
    | 'Constitution'
    | 'Intelligence'
    | 'Charisma'
    | 'Wisdom';
}

const AbilityDropBox: React.FC<AbilityDropBoxProps> = ({ label }) => {
  const { dispatch } = useContext(AbilityActions);
  const [value, setValue] = useState<number | null>(null);
  const dispatchType = useMemo(() => label.toUpperCase(), [label]);

  // Dispatching ability values, based on the value state of the component.
  // This tracks all changes in this container, either be drag or drop.
  useEffect(() => {
    if (value) dispatch({ type: dispatchType as DispatchType, payload: value });
    else dispatch({ type: dispatchType as DispatchType, payload: 0 });
  }, [dispatch, value, dispatchType]);

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
