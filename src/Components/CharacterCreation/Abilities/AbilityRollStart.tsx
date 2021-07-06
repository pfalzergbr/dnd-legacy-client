export interface AbilityRollStartProps {
  handleRoll: () => void;
}

const AbilityRollStart: React.FC<AbilityRollStartProps> = ({handleRoll}) => {
  return (
    <div>
      <p>Roll 4d6 six times, and always drop the lowest number. </p>
      <button onClick={handleRoll}>Roll for stats</button>
    </div>
  );
};

export default AbilityRollStart;
