export interface AbilityResultConfirmProps {
  handleRoll: () => void;
  confirmResults: () => void;
}

const AbilityResultConfirm: React.FC<AbilityResultConfirmProps> = ({handleRoll, confirmResults}) => {
  return (
    <div>
      <button onClick={handleRoll}>Don't like them? Reroll!</button>
      <button onClick={confirmResults}>Next</button>
    </div>
  );
};

export default AbilityResultConfirm;
