import React, { Reducer, useReducer, useEffect } from 'react';

type AbilityState = {
  budget: {
    maxBudget: number;
    remaining: number;
  };
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
};

type AbilityActionType =
  | { type: 'STRENGTH'; payload: number }
  | { type: 'DEXTERITY'; payload: number }
  | { type: 'CONSTITUTION'; payload: number }
  | { type: 'INTELLIGENCE'; payload: number }
  | { type: 'WISDOM'; payload: number }
  | { type: 'CHARISMA'; payload: number };

const initialState: AbilityState = {
  budget: {
    maxBudget: 0,
    remaining: 0
  },
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
    default: {
      return state;
    }
  }
};

export const useAbilitySelect = (): {
  // abilityState: AbilityState;
  // dispatch: React.Dispatch<AbilityActionType>;
} => {
  const [abilityState, dispatch] = useReducer(abilityReducer, initialState);
  return {
    // abilityState,
    // dispatch,
  };
};
