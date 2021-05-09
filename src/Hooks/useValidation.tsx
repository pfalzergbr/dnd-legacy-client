import React, { Reducer, useReducer } from 'react';

interface ValidationState {
  lowerCase: boolean;
  upperCase: boolean;
  symbol: boolean;
  number: boolean;
  length: boolean;
}

type ActionType =
  | { type: 'LOWERCASE', payload: string}
  | { type: 'UPPERCASE', payload: string}
  | { type: 'SYMBOL', payload: string}
  | { type: 'NUMBER', payload: string }
  | { type: 'LENGTH', payload: string };

const initialState: ValidationState = {
  lowerCase: false,
  upperCase: false,
  symbol: false,
  number: false,
  length: false
}



  const authReducer: Reducer<ValidationState, ActionType > = (state, action ): ValidationState => {
    switch (action.type) {
      case 'LOWERCASE': {
        return state;
      }
      case 'UPPERCASE': {
        return state;
      }
      case 'SYMBOL': {
        return state;
      }
      case 'NUMBER': {
        return state ;
      }
      case 'LENGTH': {
        return state;
      }
      default: {
        return state;
      }
    }
  };

export const useValidation = (target: string): { validationState: ValidationState, dispatch: React.Dispatch<ActionType>} => {
  const [validationState, dispatch] = useReducer(authReducer, initialState)


  return { validationState, dispatch };
};
