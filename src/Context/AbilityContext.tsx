import { ApolloError } from '@apollo/client';
import { createContext } from 'react';
import { useAbilityRoll, AbilityRollResult } from '../Hooks/useAbilityRoll';
import { useAbilitySelect } from '../Hooks/useAbilitySelect/useAbilitySelect';
import {
  AbilityState,
  AbilityActionType,
} from '../Hooks/useAbilitySelect/types';

export interface IAbilityContext {
  rollResult: AbilityRollResult;
  abilityState: AbilityState;
}

export interface IAbilityStates {
  loading: boolean;
  error: ApolloError | undefined;
}

export interface IAbilityActions {
  rollAbilities: () => void;
  clearValue: (index: number) => void;
  setValue: (value: number, index: number) => void;
  dispatch: React.Dispatch<AbilityActionType>;
  handleAbilityMutation: (characterId: string) => void;
}

export const AbilityContext = createContext<IAbilityContext>({
  rollResult: [],
  abilityState: {
    abilities: {
      strength: { value: 0, modifier: 0 },
      dexterity: { value: 0, modifier: 0 },
      constitution: { value: 0, modifier: 0 },
      intelligence: { value: 0, modifier: 0 },
      wisdom: { value: 0, modifier: 0 },
      charisma: { value: 0, modifier: 0 },
    },
    isComplete: false,
  },
});

export const AbilityActions = createContext<IAbilityActions>(
  {} as IAbilityActions
);

export const AbilityStates = createContext<IAbilityStates>(
  {} as IAbilityStates
);

export const AbilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { rollResult, rollAbilities, clearValue, setValue } = useAbilityRoll();
  const { abilityState, dispatch, handleAbilityMutation, loading, error } =
    useAbilitySelect(0);

  return (
    <AbilityContext.Provider value={{ rollResult, abilityState }}>
      <AbilityActions.Provider
        value={{
          rollAbilities,
          clearValue,
          setValue,
          dispatch,
          handleAbilityMutation,
        }}
      >
        <AbilityStates.Provider value={{ loading, error }}>
          {children}
        </AbilityStates.Provider>
      </AbilityActions.Provider>
    </AbilityContext.Provider>
  );
};
