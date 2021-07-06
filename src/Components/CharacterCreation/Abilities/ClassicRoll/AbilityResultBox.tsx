export interface AbilityResultBoxProps {
  result: number;
}

const AbilityResultBox: React.FC<AbilityResultBoxProps> = ({ result }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        marginRight: '.5rem',
        marginBottom: '1rem',
        padding: '1rem',
        border: '1px solid black',
      }}
    >
      {result}
    </div>
  );
};

export default AbilityResultBox;
