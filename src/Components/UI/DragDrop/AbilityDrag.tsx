import { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { AbilityActions } from '../../../Context/AbilityContext';
import { itemTypes } from '../../../Utils/itemTypes';


export interface AbilityDragProps {
  value: number | null;
  isBaseResult?: boolean
  index?: number;
}

const AbilityDrag: React.FC<AbilityDragProps> = ({ value, isBaseResult = null, index }) => {
  const { clearValue } = useContext(AbilityActions)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemTypes.ABILITY_BOX,
    item: { value },
    collect: (monitor) => ({
      value,
      isDragging: monitor.isDragging(),
    }),
    end: (item: any, monitor) => {
      if (isBaseResult && index){
        // const dropResult = monitor.getDropResult()
        clearValue(index);
        console.log(item, index)
      }
    }
  }));

  return (
    <div
      ref={drag}
      style={{
        display: 'flex',
        width: '50px',
        height: '50px',
        marginBottom: '1rem',
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
