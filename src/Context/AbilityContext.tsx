import { createContext } from 'react';
import { useAbilityRoll, AbilityRollResult  } from '../Hooks/useAbilityRoll';


export interface IAbilityContext {
  rollResult: AbilityRollResult;
}

export interface IAbilityActions {
  rollAbilities: () => void;
  clearValue: (index: number,) => void;
  setValue: (value: number, index: number) => void;
}

export const AbilityContext = createContext<IAbilityContext>({
  rollResult: []
})

export const AbilityActions = createContext<IAbilityActions>({} as IAbilityActions)


export const AbilityProvider = ({children}: {children: React.ReactNode}) => {
  const { rollResult, rollAbilities, clearValue, setValue } = useAbilityRoll(); 

  console.log(clearValue);

  return (
    <AbilityContext.Provider value={{ rollResult }}>
      <AbilityActions.Provider value={{ rollAbilities, clearValue, setValue }}>
        {children}
      </AbilityActions.Provider>
   </AbilityContext.Provider>
  );
}