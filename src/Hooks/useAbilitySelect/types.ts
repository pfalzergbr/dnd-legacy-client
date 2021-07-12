export type AbilityType = {
  value: number;
  modifier: number;
};

export type AbilityState = {
  abilities: {
    strength: AbilityType;
    dexterity: AbilityType;
    constitution: AbilityType;
    intelligence: AbilityType;
    wisdom: AbilityType;
    charisma: AbilityType;
  };
  isComplete: boolean;
};

export type AbilityActionType =
  // {type: 'SET_ABILITY', payload: {ability: string, value: number}}
  | { type: 'STRENGTH'; payload: number }
  | { type: 'DEXTERITY'; payload: number }
  | { type: 'CONSTITUTION'; payload: number }
  | { type: 'INTELLIGENCE'; payload: number }
  | { type: 'WISDOM'; payload: number }
  | { type: 'CHARISMA'; payload: number };

export type AbilityPayload = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};
