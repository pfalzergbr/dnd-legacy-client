import { AbilityPayload, AbilityState } from '../../../../Hooks/useAbilitySelect';

export const getAbilityPayload = (abilityState: AbilityState): AbilityPayload => {
  const { strength, dexterity, constitution, intelligence, charisma, wisdom } = abilityState.abilities
  const abilities: AbilityPayload = {
    strength: strength.value,
    dexterity: dexterity.value,
    constitution: constitution.value,
    intelligence: intelligence.value,
    charisma: charisma.value,
    wisdom: wisdom.value
  }
  return abilities
}