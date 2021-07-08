import { useDrop } from 'react-dnd';
import { itemTypes } from '../../../Utils/itemTypes';

export interface AbilityDropZoneProps {
  setValue: (value: number) => void;
}

const AbilityDropZone: React.FC<AbilityDropZoneProps> = ({ setValue }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: itemTypes.ABILITY_BOX,
    drop: (item: any) => {
      setValue(item.value);
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
        marginBottom: '1rem',
        margin: '.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        border: isOver ? '1px solid green' : '1px solid black',
        background: isOver ? '#90EE90' : '',
      }}
    ></div>
  );
};

export default AbilityDropZone;
