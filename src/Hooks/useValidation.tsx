import React, { Reducer, useReducer, useEffect } from 'react';

interface ValidationState {
  lowerCase: boolean;
  upperCase: boolean;
  symbol: boolean;
  number: boolean;
  length: boolean;
}

type ActionType =
  | { type: 'LOWERCASE'; payload: boolean }
  | { type: 'UPPERCASE'; payload: boolean }
  | { type: 'SYMBOL'; payload: boolean }
  | { type: 'NUMBER'; payload: boolean }
  | { type: 'LENGTH'; payload: boolean };

const initialState: ValidationState = {
  lowerCase: false,
  upperCase: false,
  symbol: false,
  number: false,
  length: false,
};

const authReducer: Reducer<ValidationState, ActionType> = (
  state,
  action
): ValidationState => {
  switch (action.type) {
    case 'LOWERCASE': {
      return { ...state, lowerCase: action.payload };
    }
    case 'UPPERCASE': {
      return { ...state, upperCase: action.payload };
    }
    case 'SYMBOL': {
      return { ...state, symbol: action.payload };
    }
    case 'NUMBER': {
      return { ...state, number: action.payload };
    }
    case 'LENGTH': {
      return { ...state, length: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const useValidation = (
  target: string
): {
  validationState: ValidationState;
  dispatch: React.Dispatch<ActionType>;
} => {
  const [validationState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (target && target.length >= 8) {
      dispatch({ type: 'LENGTH', payload: true});
    } else {
      dispatch({ type: 'LENGTH', payload: false});
    }
  }, [target]);

  useEffect(() => {
    const pattern = new RegExp(/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g)
    if (target && pattern.test(target)) {
      dispatch({ type: 'SYMBOL', payload: true});
    } else {
      dispatch({ type: 'SYMBOL', payload: false});
    }
  }, [target]);

  useEffect(() => {
    const pattern = new RegExp(/\d/g)
    if (target && pattern.test(target)) {
      dispatch({ type: 'NUMBER', payload: true});
    } else {
      dispatch({ type: 'NUMBER', payload: false});
    }
  }, [target]);

  useEffect(() => {
    const pattern = new RegExp(/[A-Z]/g)
    if (target && pattern.test(target)) {
      dispatch({ type: 'UPPERCASE', payload: true});
    } else {
      dispatch({ type: 'UPPERCASE', payload: false});
    }
  }, [target]);

  useEffect(() => {
    const pattern = new RegExp(/[a-z]/g)
    if (target && pattern.test(target)) {
      dispatch({ type: 'LOWERCASE', payload: true});
    } else {
      dispatch({ type: 'LOWERCASE', payload: false});
    }
  }, [target]);

  return { validationState, dispatch };
};
