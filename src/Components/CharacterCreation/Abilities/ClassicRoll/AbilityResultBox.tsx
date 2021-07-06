export interface AbilityResultBoxProps {
  result: number;
}

const AbilityResultBox: React.FC<AbilityResultBoxProps> = ({ result }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '50px',
        height: '50px',
        margin: '.5rem',
        marginBottom: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
      }}
    >
      {result}
    </div>
  );
};

export default AbilityResultBox;
