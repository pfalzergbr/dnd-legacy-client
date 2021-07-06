import { useState } from 'react';

export const useRollingState = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [firstRollDone, setFirstRollDone] = useState(false);

  const startRoll = () => {
    if (!firstRollDone) setFirstRollDone(true);
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 3000);
  };

  return { isRolling, firstRollDone, startRoll };
};
