import { useState } from 'react';

export type AbilityRollResult = number[];

export const useAbilityRoll = () => {
  const [rollResult, setRollResult] = useState<AbilityRollResult>([]);

  const rolld6 = (): number => {
    return Math.ceil(Math.random() * 6);
  };

  const dropLowest = (rollResult: number[]): number[] => {
    const lowestRoll = Math.min(...rollResult);
    const lowestIndex = rollResult.findIndex((roll) => lowestRoll === roll);
    rollResult.splice(lowestIndex, 1);
    return rollResult;
  };

  const sumResults = (rollValues: number[]): number => {
    return rollValues.reduce((total, current) => total + current);
  }

  const rollSingleAbility = (): number => {
    const rollResults = []
    for (let i = 0; i < 4; i++){
      rollResults.push(rolld6());
    }
    const remainingResults = dropLowest(rollResults)
    return sumResults(remainingResults)
  }

  const rollAbilities = ():void => {
    const rollResults = [];
    for (let i = 0; i < 6; i++){
      rollResults.push(rollSingleAbility());
    }
    setRollResult(rollResults);
  }

  const clearValue = (index: number): void => {
    const updatedRollResult = rollResult;
    updatedRollResult[index] = 0;
    setRollResult(updatedRollResult)
  }

  const setValue = (index: number, value: number):void => {
    const updatedRollResult = rollResult;
    updatedRollResult[index] = value;
    setRollResult(updatedRollResult);
  }

  return {rollResult, rollAbilities, clearValue, setValue}
};
