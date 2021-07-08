import { createContext } from 'react';
import { useAbilityRoll, AbilityRollResult } from '../Hooks/useAbilityRoll';
import {
  AbilityState,
  useAbilitySelect,
  AbilityActionType,
} from '../Hooks/useAbilitySelect';

export interface IAbilityContext {
  rollResult: AbilityRollResult;
  abilityState: AbilityState;
}

export interface IAbilityActions {
  rollAbilities: () => void;
  clearValue: (index: number) => void;
  setValue: (value: number, index: number) => void;
  dispatch: React.Dispatch<AbilityActionType>;
}

export const AbilityContext = createContext<IAbilityContext>({
  rollResult: [],
  abilityState: {
    abilities: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    isComplete: false,
  },
});

export const AbilityActions = createContext<IAbilityActions>(
  {} as IAbilityActions
);

export const AbilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { rollResult, rollAbilities, clearValue, setValue } = useAbilityRoll();
  const { abilityState, dispatch } = useAbilitySelect(0);

  return (
    <AbilityContext.Provider value={{ rollResult, abilityState }}>
      <AbilityActions.Provider
        value={{ rollAbilities, clearValue, setValue, dispatch }}
      >
        {children}
      </AbilityActions.Provider>
    </AbilityContext.Provider>
  );
};
