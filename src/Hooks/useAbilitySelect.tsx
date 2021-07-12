import React, { Reducer, useReducer } from 'react';
import { useMutation, ApolloError } from '@apollo/client';
import { SET_ABILITIES } from '../GraphQL/characterMutations';
import { GET_CHARACTER_BY_ID } from '../GraphQL/characterQueries';

export type AbilityType = {
  value: number;
  modifier: number;
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

export type AbilityPayload = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export const bonusCalcArray = [
  0, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
];

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
          strength: {
            value: action.payload,
            modifier: bonusCalcArray[action.payload],
          },
        },
      };
    }
    case 'DEXTERITY': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          dexterity: {
            value: action.payload,
            modifier: bonusCalcArray[action.payload],
          },
        },
      };
    }
    case 'CONSTITUTION': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          constitution: {
            value: action.payload,
            modifier: bonusCalcArray[action.payload],
          },
        },
      };
    }
    case 'INTELLIGENCE': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          intelligence: {
            value: action.payload,
            modifier: bonusCalcArray[action.payload],
          },
        },
      };
    }
    case 'CHARISMA': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          charisma: {
            value: action.payload,
            modifier: bonusCalcArray[action.payload],
          },
        },
      };
    }
    case 'WISDOM': {
      return {
        ...state,
        abilities: {
          ...state.abilities,
          wisdom: {
            value: action.payload,
            modifier: bonusCalcArray[action.payload],
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const getAbilityPayload = (
  abilityState: AbilityState
): AbilityPayload => {
  const { strength, dexterity, constitution, intelligence, charisma, wisdom } =
    abilityState.abilities;
  const abilities: AbilityPayload = {
    strength: strength.value,
    dexterity: dexterity.value,
    constitution: constitution.value,
    intelligence: intelligence.value,
    charisma: charisma.value,
    wisdom: wisdom.value,
  };
  return abilities;
};

export const useAbilitySelect = (
  initialValue: number
): {
  abilityState: AbilityState;
  dispatch: React.Dispatch<AbilityActionType>;
  handleAbilityMutation: (characterId: string) => void;
  loading: boolean
  error:  ApolloError | undefined
} => {
  const [setAbilities, { loading, error }] = useMutation(SET_ABILITIES, {
    onCompleted: () => {
      console.log('sent');
      // history.push(`/create-character/${characterId}/skills`);
    },
  });

  const initialState: AbilityState = {
    abilities: {
      strength: { value: initialValue, modifier: 0 },
      dexterity: { value: initialValue, modifier: 0 },
      constitution: { value: initialValue, modifier: 0 },
      intelligence: { value: initialValue, modifier: 0 },
      wisdom: { value: initialValue, modifier: 0 },
      charisma: { value: initialValue, modifier: 0 },
    },
    isComplete: false,
  };
  const [abilityState, dispatch] = useReducer(abilityReducer, initialState);

  const handleAbilityMutation = (characterId: string) => {
    const abilities = getAbilityPayload(abilityState);
    setAbilities({
      variables: { characterId, abilities },
      refetchQueries: [
        { query: GET_CHARACTER_BY_ID, variables: { id: characterId } },
      ],
    });
  };

  return {
    abilityState,
    dispatch,
    handleAbilityMutation,
    loading,
    error
  };
};
