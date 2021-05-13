import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($data) {
    login(data: $data) {
      id
      email
    }
  }
`;
