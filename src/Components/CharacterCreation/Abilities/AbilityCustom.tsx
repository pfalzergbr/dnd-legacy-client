import AbilityHeader from "./AbilityHeader";

export interface AbilityCustomProps {
  
}

const AbilityCustom: React.FC<AbilityCustomProps> = () => {
  
  return ( <div>
    <AbilityHeader />
    <div>
      <h2>Custom allocation</h2>
      <p>Total: 0</p>
    </div>
    <div>
      <label htmlFor="strength">Strength</label>
      <select name="strength">
        {}
      </select>

    </div>

  </div> );
}
 
export default AbilityCustom;