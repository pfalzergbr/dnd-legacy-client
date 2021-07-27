import React, { useReducer } from 'react';
import { useHistory } from 'react-router';
import { useMutation, ApolloError } from '@apollo/client';
import { SET_ABILITIES } from '../../GraphQL/characterMutations';
import { GET_CHARACTER_BY_ID } from '../../GraphQL/characterQueries';
import { AbilityState, AbilityActionType } from './types';
import { abilityReducer } from './reducer';
import { getAbilityPayload, getInitialState } from './utils';

export const useAbilitySelect = (
  initialValue: number
): {
  abilityState: AbilityState;
  dispatch: React.Dispatch<AbilityActionType>;
  handleAbilityMutation: (characterId: string) => void;
  loading: boolean;
  error: ApolloError | undefined;
} => {
  const history = useHistory();
  const initialState = getInitialState(initialValue);
  const [abilityState, dispatch] = useReducer(abilityReducer, initialState);

  const [setAbilities, { loading, error }] = useMutation(SET_ABILITIES, {
    onCompleted: (data) => {
      console.log(data);
      const { id: characterId } = data.setInitialAbilities;
      history.push(`/create-character/${characterId}/skills`);
    },
  });

  const handleAbilityMutation = (characterId: string) => {
    const abilities = getAbilityPayload(abilityState);
    setAbilities({
      variables: { characterId, abilityValues: abilities },
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
    error,
  };
};
