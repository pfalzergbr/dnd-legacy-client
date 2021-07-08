import { useState, useCallback } from 'react';

export type AbilityRollResult = number[];

export const useAbilityRoll = () => {
  const [rollResult, setRollResult] = useState<AbilityRollResult>([]);
  
  const rolld6 = (): number => {
    const diceSides = 6;
    return Math.ceil(Math.random() * diceSides);
  };

  const dropLowest = (rollResult: number[]): number[] => {
    const lowestRoll = Math.min(...rollResult);
    const lowestIndex = rollResult.findIndex((roll) => lowestRoll === roll);
    rollResult.splice(lowestIndex, 1);
    return rollResult;
  };

  const sumResults = (rollValues: number[]): number => {
    return rollValues.reduce((total, current) => total + current);
  };

  const rollSingleAbility = (): number => {
    const rollResults = [];
    for (let i = 0; i < 4; i++) {
      rollResults.push(rolld6());
    }
    const remainingResults = dropLowest(rollResults);
    return sumResults(remainingResults);
  };

  const rollAbilities = (): void => {
    const numberOfRolls = 6;
    const rollResults = [];
    for (let i = 0; i < numberOfRolls; i++) {
      rollResults.push(rollSingleAbility());
    }
    setRollResult(rollResults);
  };

  const clearValue = useCallback(
    (index: number): void => {
      setRollResult(rollResult => {
        const updatedRollResult = [...rollResult];
        updatedRollResult[index] = 0;
        return updatedRollResult});
    },
    []
  );

  const setValue = useCallback(
    (index: number, value: number): void => {
      setRollResult(rollResult => {
        const updatedRollResult = [...rollResult];
        updatedRollResult[index] = value;
        return updatedRollResult
      });
    },
    []
  );


  return { rollResult, rollAbilities, setRollResult, clearValue, setValue };
};
