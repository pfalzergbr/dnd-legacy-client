export interface AbilityDropBoxProps {
  label: string;
}

const AbilityDropBox: React.FC<AbilityDropBoxProps> = ({ label }) => {
  return (
    <div style={{   margin: '1rem', width: '150px'}}>
      <h4>{label}</h4>
      <div
        style={{
          display: 'flex',
          width: '50px',
          height: '50px',
          marginBottom: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid black',
        }}
      ></div>
    </div>
  );
};

export default AbilityDropBox;
