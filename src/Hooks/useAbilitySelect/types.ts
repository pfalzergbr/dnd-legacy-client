export type AbilityType =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'charisma'
  | 'wisdom';
  
export type DispatchType =
  | 'STRENGTH'
  | 'DEXTERITY'
  | 'CONSTITUTION'
  | 'INTELLIGENCE'
  | 'WISDOM'
  | 'CHARISMA';

export type AbilityFieldType = {
  value: number;
  modifier: number;
};

export type AbilityState = {
  abilities: {
    strength: AbilityFieldType;
    dexterity: AbilityFieldType;
    constitution: AbilityFieldType;
    intelligence: AbilityFieldType;
    wisdom: AbilityFieldType;
    charisma: AbilityFieldType;
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
