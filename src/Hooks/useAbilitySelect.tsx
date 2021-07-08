import React, { Reducer, useReducer } from 'react';

export type AbilityType = {
  value: number;
  bonus: number;
};

export type AbilityState = {
  abilities: {
    strength: AbilityType;
    dexterity: AbilityType;
    constitution: AbilityType;
    intelligence: AbilityType;
    wisdom: AbilityType;
    charisma: AbilityType;
  };
  isComplete: boolean;
};

export type AbilityActionType =
  // {type: 'SET_ABILITY', payload: {ability: string, value: number}}
  | { type: 'STRENGTH'; payload: number }
  | { type: 'DEXTERITY'; payload: number }
  | { type: 'CONSTITUTION'; payload: number }
  | { type: 'INTELLIGENCE'; payload: number }
  | { type: 'WISDOM'; payload: number }
  | { type: 'CHARISMA'; payload: number };

export const abilityReducer: Reducer<AbilityState, AbilityActionType> = (
  state,
  action
): AbilityState => {
  switch (action.type) {
    case 'STRENGTH': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          strength: { value: action.payload, bonus: 0 },
        },
      };
    }
    case 'DEXTERITY': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          dexterity: { value: action.payload, bonus: 0 },
        },
      };
    }
    case 'CONSTITUTION': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          constitution: { value: action.payload, bonus: 0 },
        },
      };
    }
    case 'INTELLIGENCE': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          intelligence: { value: action.payload, bonus: 0 },
        },
      };
    }
    case 'CHARISMA': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          charisma: { value: action.payload, bonus: 0 },
        },
      };
    }
    case 'WISDOM': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          wisdom: { value: action.payload, bonus: 0 },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const useAbilitySelect = (
  initialValue: number
): {
  abilityState: AbilityState;
  dispatch: React.Dispatch<AbilityActionType>;
} => {
  const initialState: AbilityState = {
    abilities: {
      strength: { value: initialValue, bonus: 0 },
      dexterity: { value: initialValue, bonus: 0 },
      constitution: { value: initialValue, bonus: 0 },
      intelligence: { value: initialValue, bonus: 0 },
      wisdom: { value: initialValue, bonus: 0 },
      charisma: { value: initialValue, bonus: 0 },
    },
    isComplete: false,
  };

  const [abilityState, dispatch] = useReducer(abilityReducer, initialState);
  return {
    abilityState,
    dispatch,
  };
};
