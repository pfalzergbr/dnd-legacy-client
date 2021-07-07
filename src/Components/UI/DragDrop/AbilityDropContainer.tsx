import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../../../Utils/itemTypes';
import { AbilityActions } from '../../../Context/AbilityContext';


export interface AbilityDropContainerProps {
  index?: number;
}
 
const AbilityDropContainer: React.FC<AbilityDropContainerProps> = ({index}) => {
  const { setValue } = useContext(AbilityActions)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: itemTypes.ABILITY_BOX,
    drop: (item: any, monitor) => {
      if (index){
        setValue(index, item.value);
      }
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
      // marginBottom: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed black',
      background: isOver ? '#90EE90' : '',
    }}
  >

  </div>
  );
}
 
export default AbilityDropContainer;