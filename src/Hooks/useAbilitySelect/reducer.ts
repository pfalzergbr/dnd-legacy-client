import { Reducer } from 'react';
import { AbilityState, AbilityActionType } from './types'
import { modifierCalcArray, validateAbilities } from './utils'
import { abilityActionTypes } from './abilityActionTypes'

const { STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, CHARISMA, WISDOM } = abilityActionTypes

// Add logic to handle validation


export const abilityReducer: Reducer<AbilityState, AbilityActionType> = (
  state,
  action
): AbilityState => {
  switch (action.type) {
    case STRENGTH: {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          strength: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
        isComplete: validateAbilities(state)
      };
    }
    case DEXTERITY: {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          dexterity: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
        isComplete: validateAbilities(state)
      };
    }
    case CONSTITUTION: {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          constitution: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
        isComplete: validateAbilities(state)
      };
    }
    case INTELLIGENCE: {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          intelligence: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
        isComplete: validateAbilities(state)
      };
    }
    case CHARISMA: {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          charisma: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
        isComplete: validateAbilities(state)
      };
    }
    case WISDOM: {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          wisdom: {
            value: action.payload,
            modifier: modifierCalcArray[action.payload],
          },
        },
        isComplete: validateAbilities(state)
      };
    }
    default: {
      return state;
    }
  }
};