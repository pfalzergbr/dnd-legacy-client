import { useParams } from 'react-router-dom';
import { useAbilitySelect } from '../../../../Hooks/useAbilitySelect/useAbilitySelect';
import AbilityHeader from '../Shared/AbilityHeader';
import AbilitySelect from '../Shared/AbilitySelect';

export interface AbilityCustomProps {}

const AbilityCustom: React.FC<AbilityCustomProps> = () => {
  const { characterId } = useParams<{ characterId: string }>()
  const { abilityState, dispatch, handleAbilityMutation } = useAbilitySelect(10);
  const {
    abilities: {
      strength,
      dexterity,
      constitution,
      intelligence,
      charisma,
      wisdom,
    },
  } = abilityState;

  const handleNext = () => {
    handleAbilityMutation(characterId);
  }

  return (
    <div>
      <AbilityHeader />
      <div>
        <h2>Custom allocation</h2>
        {/* <p>Total: 0</p> */}
      </div>
      <div>
        <AbilitySelect
          selectName='strength'
          valueRef={strength.value}
          dispatch={dispatch}
        />
        <AbilitySelect
          selectName='dexterity'
          valueRef={dexterity.value}
          dispatch={dispatch}
        />
        <AbilitySelect
          selectName='constitution'
          valueRef={constitution.value}
          dispatch={dispatch}
        />
        <AbilitySelect
          selectName='intelligence'
          valueRef={intelligence.value}
          dispatch={dispatch}
        />
        <AbilitySelect
          selectName='charisma'
          valueRef={charisma.value}
          dispatch={dispatch}
        />
        <AbilitySelect
          selectName='wisdom'
          valueRef={wisdom.value}
          dispatch={dispatch}
        />
      </div>
      <div>
        <button disabled={!abilityState.isComplete} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default AbilityCustom;
