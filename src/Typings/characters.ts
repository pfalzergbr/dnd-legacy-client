export interface ICharacterLink {
  characterId: string;
  name: string;
  race: string | null;
  class: string | null;
  level: number;
  isComleted: boolean;
  nextLink: string;
}

export interface IMarkedCharacter {
  name: string;
  characterId: string;
}

export interface ICharacterSnippet {
  id: string;
  name: string;
  characterRace: {
    raceName: string;
  };
  characterClass: [
    {
      className: string;
      classLevel: string;
    }
  ];

}
