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
        nextLink
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById ($id: String!){
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
