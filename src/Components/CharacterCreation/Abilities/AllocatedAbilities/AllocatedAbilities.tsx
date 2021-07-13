export interface AllocatedAbilitiesProps {
  handleStartAgain: () => void;
}
 
const AllocatedAbilities: React.FC<AllocatedAbilitiesProps> = ({handleStartAgain}) => {
  return ( <div>
    <h3>Ability Scores</h3>
    <div></div>
    <div>
      <button onClick={handleStartAgain}>Start again</button>
    </div>
  </div> );
}
 
export default AllocatedAbilities;