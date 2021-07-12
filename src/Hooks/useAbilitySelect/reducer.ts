import { Reducer } from 'react';
import { AbilityState, AbilityActionType } from './types'
import { modifierCalcArray, validateAbilities } from './utils'
import { abilityActionTypes } from './abilityActionTypes'

const { STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, CHARISMA, WISDOM } = abilityActionTypes

// Add logic to handle validation

// New State created in a separate variable, to be able to evaluate isComplete state, before 
// the new value is set. This avoids stale data, and off by one error.
export const abilityReducer: Reducer<AbilityState, AbilityActionType> = (
  state,
  action
): AbilityState => {
  switch (action.type) {
    case STRENGTH: {
      const newState = {
        ...state,
        abilities: {
          ...state.abilities,
          strength: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
      }
      return {
        ...newState,
        isComplete: validateAbilities(newState)
      };
    }
    case DEXTERITY: {
      const newState = {
        ...state,
        abilities: {
          ...state.abilities,
          dexterity: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
      }
      return {
        ...newState,
        isComplete: validateAbilities(newState)
      };
    }
    case CONSTITUTION: {
      const newState = {
        ...state,
        abilities: {
          ...state.abilities,
          constitution: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
      }
      return {
        ...newState,
        isComplete: validateAbilities(newState)
      };
    }
    case INTELLIGENCE: {
      const newState = {
        ...state,
        abilities: {
          ...state.abilities,
          intelligence: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
      }
      return {
        ...newState,
        isComplete: validateAbilities(newState)
      };
    }
    case CHARISMA: {
      const newState = {
        ...state,
        abilities: {
          ...state.abilities,
          charisma: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
      }
      return {
        ...newState,
        isComplete: validateAbilities(newState)
      };
    }
    case WISDOM: {
      const newState = {
        ...state,
        abilities: {
          ...state.abilities,
          wisdom: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
      }
      return {
        ...newState,
        isComplete: validateAbilities(newState)
      };
    }
    default: {
      return state;
    }
  }
};