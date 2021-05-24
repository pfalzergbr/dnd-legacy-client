import { gql } from '@apollo/client';

export const CREATE_CHARACTER = gql`
  mutation CreateCharacter($name: String!) {
    createCharacter(characterData: { name: $name }) {
      id
      name
    }
  }
`;

export const GET_CHARACTERS = gql`
  query {
    getUser {
      id
      email
      characters {
        characterId
        name
        level
      }
    }
  }
`;

export const DELETE_CHARACTER = gql`
  mutation DeleteCharacter($id: String!) {
    deleteCharacter(id: $id)
  }
`;
