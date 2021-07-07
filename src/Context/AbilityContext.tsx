import { createContext } from 'react';
import { useAbilityRoll, AbilityRollResult  } from '../Hooks/useAbilityRoll';


export interface IAbilityContext {
  rollResult: AbilityRollResult;
}

export interface IAbilityActions {
  rollAbilities: () => void;
}

export const AbilityContext = createContext<IAbilityContext>({
  rollResult: []
})

export const AbilityActions = createContext<IAbilityActions>({} as IAbilityActions)


export const AbilityProvider = ({children}: {children: React.ReactNode}) => {
  const { rollResult, rollAbilities } = useAbilityRoll(); 


  return (
    <AbilityContext.Provider value={{ rollResult }}>
      <AbilityActions.Provider value={{ rollAbilities }}>
        {children}
      </AbilityActions.Provider>
   </AbilityContext.Provider>
  );
}