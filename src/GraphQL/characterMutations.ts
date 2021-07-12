import { gql } from '@apollo/client';

export const CREATE_CHARACTER = gql`
  mutation CreateCharacter($name: String!) {
    createCharacter(characterData: { name: $name }) {
      id
      name
    }
  }
`;

export const DELETE_CHARACTER = gql`
  mutation DeleteCharacter($id: String!) {
    deleteCharacter(id: $id)
  }
`;

export const CHOOSE_RACE = gql`
  mutation ChooseRace($characterId: String!, $raceId: String!) {
    chooseRace(characterId: $characterId, raceId: $raceId) {
      name
      characterRace {
        raceName
        raceId
      }
    }
  }
`;

export const CHOOSE_CLASS = gql`
  mutation ChooseClass($characterId: String!, $classId: String!) {
    chooseClass(characterId: $characterId, classId: $classId) {
      name
      characterClass {
        className
        classId
      }
    }
  }
`;

export const SET_ABILITIES = gql`
  mutation SetAbilities($characterId: String!, $abilityValues: AbilityInput!) {
    setInitialAbilities(
      characterId: $characterId
      abilityValues: $abilityValues
    ) {
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
          baseValue
          modifier
        }
        dexterity {
          baseValue
          modifier
        }
        constitution {
          baseValue
          modifier
        }
        intelligence {
          baseValue
          modifier
        }
        charisma {
          baseValue
          modifier
        }
        wisdom {
          baseValue
          modifier
        }
      }
    }
  }
`;
