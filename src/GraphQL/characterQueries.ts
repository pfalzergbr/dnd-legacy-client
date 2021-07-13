import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query {
    getUser {
      id
      email
      characters {
        characterId
        name
        race
        class
        level
        isCompleted
        nextLink
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: String!) {
    getCharacterById(id: $id) {
      id
      name
      charCreationProgress {
        nextLink
        links {
          name
          to
          active
        }
      }
    }
  }
`;

export const GET_CHARACTER_ABILITIES_SNIPPET = gql`
  query GetCharacterById($id: String!) {
    getCharacterById(id: $id) {
      id
      name
      characterRace {
        raceName
      }
      characterClass {
        className
        classLevel
      }
      characterAbilities {
        strength {
          finalValue
          baseValue
          modifier
          statModifiers {
            modifierSource
            modifierValue
          }
        }
        dexterity {
          finalValue
          baseValue
          modifier
          statModifiers {
            modifierSource
            modifierValue
          }
        }
        constitution {
          finalValue
          baseValue
          modifier
          statModifiers {
            modifierSource
            modifierValue
          }
        }
        intelligence {
          finalValue
          baseValue
          modifier
          statModifiers {
            modifierSource
            modifierValue
          }
        }
        charisma {
          finalValue
          baseValue
          modifier
          statModifiers {
            modifierSource
            modifierValue
          }
        }
        wisdom {
          finalValue
          baseValue
          modifier
          statModifiers {
            modifierSource
            modifierValue
          }
        }
        isAllocated
      }
    }
  }
`;
