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
  mutation ChooseRace($characterId: String!, $raceId: String!){
    chooseRace(characterId:$characterId, raceId:$raceId){
      name
      characterRace {
        raceName
        raceId
      }
    }
  }
`
