import { AbilityState, AbilityPayload } from './types'

export const modifierCalcArray = [
  0, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
];

export const getInitialState = (initialValue : number ): AbilityState => {
  return {
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
}


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


export const validateAbilities = (state: AbilityState): boolean => {
  const abilities = Object.values(state.abilities);
  let isValid = true;
  for (let i = 0; i < abilities.length; i++){
    if (abilities[i].value === 0){
      isValid = false
      break
    } 
  }
  return isValid;
}