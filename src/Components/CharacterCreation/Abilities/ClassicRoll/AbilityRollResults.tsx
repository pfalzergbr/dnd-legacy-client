import AbilityResultBox from "./AbilityResultBox";

export interface AbilityRollResultsProps {
  abilityValues: number[];
  handleRoll: () => void;
}

const AbilityRollResults: React.FC<AbilityRollResultsProps> = ({handleRoll, abilityValues}) => {
  return (
    <div>
      <p>Roll 4d6 six times, and always drop the lowest number. </p>
      <div>
        {abilityValues.map((value, index) => <AbilityResultBox key={index} result={value}/>)}
      </div>
      <button onClick={handleRoll}>Don't like them? Reroll!</button>
    </div>
  );
};

export default AbilityRollResults;
