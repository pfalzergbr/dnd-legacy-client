import { gql } from '@apollo/client';

export const GET_CLASSES = gql`
  query {
    getAllClasses {
      id
      name
      classDescription
      hitDie
    }
  }
`;
