import { useDrag } from 'react-dnd';
import { itemTypes } from '../../../Utils/itemTypes';

export interface AbilityDragProps {
  value: number;
}
 
const AbilityDrag: React.FC<AbilityDragProps> = ({value}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemTypes.ABILITY_BOX,
    item: { value },
    collect: (monitor) => ({
      value,
      isDragging: monitor.isDragging(),
    }),
    // end: (item: any, monitor) => {
    //   const dropResult = monitor.getDropResult()
    //   console.log(item, dropResult)
    // }
  }));


  return ( <div
    ref={drag}
    style={{
      display: 'flex',
      width: '50px',
      height: '50px',
      margin: '.5rem',
      marginBottom: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      opacity: isDragging ? '0.5' : '1'
    }}
  >
    {value}
  </div> );
}
 
export default AbilityDrag;