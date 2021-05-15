import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($data: UserInput!) {
    login(data: $data) {
      id
      email
    }
  }
`;

export const GET_USER = gql`
  query {
    getUser {
      id
      email
    }
  }
`;

export const LOGOUT = gql`
  query {
    logout
  }
`;
