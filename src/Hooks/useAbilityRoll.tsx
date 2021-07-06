import { useState } from 'react';

type AbilityRollResult = number[];

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

  const rollSingleAbility = () => {
    const rollResults = []
    for (let i = 0; i < 4; i++){
      rollResults.push(rolld6());
    }
    const remainingResults = dropLowest(rollResults)
    return sumResults(remainingResults)
  }

  const rollAbilities = () => {
    const rollResults = [];
    for (let i = 0; i < 6; i++){
      rollResults.push(rollSingleAbility());
    }
    setRollResult(rollResults);
  }

  return {rollResult, rollAbilities}
};
