import { useAbilitySelect } from '../../../../Hooks/useAbilitySelect';
import AbilityHeader from '../Shared/AbilityHeader';
import AbilitySelect from '../Shared/AbilitySelect';

export interface AbilityCustomProps {}

const AbilityCustom: React.FC<AbilityCustomProps> = () => {
  const { abilityState, dispatch } = useAbilitySelect(10);
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

  return (
    <div>
      <AbilityHeader />
      <div>
        <h2>Custom allocation</h2>
        <p>Total: 0</p>
      </div>
      <AbilitySelect
        selectName='strength'
        valueRef={strength}
        dispatch={dispatch}
      />
      <AbilitySelect
        selectName='dexterity'
        valueRef={dexterity}
        dispatch={dispatch}
      />
      <AbilitySelect
        selectName='constitution'
        valueRef={constitution}
        dispatch={dispatch}
      />
      <AbilitySelect
        selectName='intelligence'
        valueRef={intelligence}
        dispatch={dispatch}
      />
      <AbilitySelect
        selectName='charisma'
        valueRef={charisma}
        dispatch={dispatch}
      />
      <AbilitySelect
        selectName='wisdom'
        valueRef={wisdom}
        dispatch={dispatch}
      />
    </div>
  );
};

export default AbilityCustom;
