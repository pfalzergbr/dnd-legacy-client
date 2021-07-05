import { AbilityActionType } from '../../../Hooks/useAbilitySelect';

export type AbilityType =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'charisma'
  | 'wisdom';
export type DispatchType =
  | 'STRENGTH'
  | 'DEXTERITY'
  | 'CONSTITUTION'
  | 'INTELLIGENCE'
  | 'WISDOM'
  | 'CHARISMA';

export interface AbilitySelectProps {
  selectName: AbilityType;
  valueRef: number;
  dispatch: (value: AbilityActionType) => void;
}

const abilityValues = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const AbilitySelect: React.FC<AbilitySelectProps> = ({
  selectName,
  valueRef,
  dispatch,
}) => {
  const dispatchType = selectName.toUpperCase();

  return (
    <div>
      <label htmlFor={selectName}>{selectName}</label>
      <select
        name={selectName}
        value={valueRef}
        onChange={(e) =>
          dispatch({
            type: dispatchType as DispatchType,
            payload: parseInt(e.target.value),
          })
        }
      >
        {abilityValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AbilitySelect;
