import { useState } from 'react';
import { useDrop } from 'react-dnd';

export interface AbilityDropBoxProps {
  label: string;
}

const AbilityDropBox: React.FC<AbilityDropBoxProps> = ({ label }) => {
  const [value, setValue] = useState('');
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ABILITY_BOX',
    drop: (item: any, monitor) => {
      // console.log('dropped', item, monitor)
      setValue(item.result)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),

  }));



  return (
    <div style={{ margin: '1rem', width: '150px' }}>
      <h4>{label}</h4>
      <div
        ref={drop}
        style={{
          display: 'flex',
          width: '50px',
          height: '50px',
          marginBottom: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          border: isOver ? '1px solid green' : '1px solid black',
          background: isOver? '#90EE90' : ''
        }}
      >{value}
      </div>
    </div>
  );
};

export default AbilityDropBox;
