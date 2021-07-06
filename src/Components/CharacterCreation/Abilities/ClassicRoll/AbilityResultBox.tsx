import { useDrag } from 'react-dnd';

export interface AbilityResultBoxProps {
  result: number;
}

const AbilityResultBox: React.FC<AbilityResultBoxProps> = ({ result }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ABILITY_BOX',
    item: {result},
    collect: (monitor) => ({
      result,
      isDragging: monitor.isDragging(),
    }),
    // end: (item: any, monitor) => {
    //   const dropResult = monitor.getDropResult()
    //   console.log(item, dropResult)
    // }
  }));

  return (
    <div
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
      {result}
    </div>
  );
};

export default AbilityResultBox;
