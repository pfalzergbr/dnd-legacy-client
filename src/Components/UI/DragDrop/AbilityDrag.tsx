import { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { AbilityActions } from '../../../Context/AbilityContext';
import { itemTypes } from '../../../Utils/itemTypes';

export interface AbilityDragProps {
  value: number | null;
  setValue?: (value: number | null) => void;
  index?: number;
}

const AbilityDrag: React.FC<AbilityDragProps> = ({
  value,
  index,
  setValue,
}) => {
  const { clearValue } = useContext(AbilityActions);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemTypes.ABILITY_BOX,
    item: { value },
    collect: (monitor) => ({
      value,
      isDragging: monitor.isDragging(),
    }),
    end: (item: any, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        if (index || index === 0) {
          // const dropResult = monitor.getDropResult()
          clearValue(index);
          // console.log(item, index)
        }
        if (setValue) {
          setValue(null);
        }
      }
    },
  }));

  return (
    <div
      ref={drag}
      style={{
        display: 'flex',
        width: '50px',
        height: '50px',
        marginBottom: '1rem',
        margin: '.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        opacity: isDragging ? '0.5' : '1',
      }}
    >
      {value}
    </div>
  );
};

export default AbilityDrag;
