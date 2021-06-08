import { gql } from '@apollo/client';


export const GET_CHARACTERS = gql`
  query {
    getUser {
      id
      email
      characters {
        characterId
        name
        level
        isCompleted
      }
    }
  }
`;