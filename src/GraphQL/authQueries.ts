import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($data: UserInput!) {
    login(data: $data) {
      id
      email
    }
  }
`;
