import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../../../Utils/itemTypes';


export interface AbilityDropContainerProps {
  
}
 
const AbilityDropContainer: React.FC<AbilityDropContainerProps> = () => {
  const [value, setValue] = useState('');
  const [{ isOver }, drop] = useDrop(() => ({
    accept: itemTypes.ABILITY_BOX,
    drop: (item: any, monitor) => {
      setValue(item.result);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
    ref={drop}
    style={{
      display: 'flex',
      width: '50px',
      height: '50px',
      margin: '.5rem',
      marginBottom: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed black',
      background: isOver ? '#90EE90' : '',
    }}
  >
    {value}
  </div>
  );
}
 
export default AbilityDropContainer;