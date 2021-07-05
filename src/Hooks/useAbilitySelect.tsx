import React, { Reducer, useReducer } from 'react';

export type AbilityState = {
  // budget: {
  //   maxBudget: number;
  //   remaining: number;
  // };
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

const initialState: AbilityState = {
  // budget: {
  //   maxBudget: 0,
  //   remaining: 0
  // },
  abilities: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  }
}


export const abilityReducer: Reducer<AbilityState, AbilityActionType> = (
  state,
  action
): AbilityState => {
  switch (action.type) {
    case 'STRENGTH': {
      return {...state, abilities: {...state.abilities, strength: action.payload}}
    }
    case 'DEXTERITY': {
      return {...state, abilities: {...state.abilities, dexterity: action.payload}}
    }
    case 'CONSTITUTION': {
      return {...state, abilities: {...state.abilities, constitution: action.payload}}
    }
    case 'INTELLIGENCE': {
      return {...state, abilities: {...state.abilities, intelligence: action.payload}}
    }
    case 'CHARISMA': {
      return {...state, abilities: {...state.abilities, charisma: action.payload}}
    }
    case 'WISDOM': {
      return {...state, abilities: {...state.abilities, wisdom: action.payload}}
    }
    default: {
      return state;
    }
  }
};

export const useAbilitySelect = (): {
  abilityState: AbilityState;
  dispatch: React.Dispatch<AbilityActionType>;
} => {
  const [abilityState, dispatch] = useReducer(abilityReducer, initialState);
  return {
    abilityState,
    dispatch,
  };
};
