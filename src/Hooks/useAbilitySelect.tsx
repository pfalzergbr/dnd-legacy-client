import React, { Reducer, useReducer } from 'react';


export type AbilityState = {
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
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
        abilities: { ...state.abilities, strength: action.payload },
      };
    }
    case 'DEXTERITY': {
      return {
        ...state,
        abilities: { ...state.abilities, dexterity: action.payload },
      };
    }
    case 'CONSTITUTION': {
      return {
        ...state,
        abilities: { ...state.abilities, constitution: action.payload },
      };
    }
    case 'INTELLIGENCE': {
      return {
        ...state,
        abilities: { ...state.abilities, intelligence: action.payload },
      };
    }
    case 'CHARISMA': {
      return {
        ...state,
        abilities: { ...state.abilities, charisma: action.payload },
      };
    }
    case 'WISDOM': {
      return {
        ...state,
        abilities: { ...state.abilities, wisdom: action.payload },
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
      strength: initialValue,
      dexterity: initialValue,
      constitution: initialValue,
      intelligence: initialValue,
      wisdom: initialValue,
      charisma: initialValue,
    },
  };

  const [abilityState, dispatch] = useReducer(abilityReducer, initialState);
  return {
    abilityState,
    dispatch,
  };
};
