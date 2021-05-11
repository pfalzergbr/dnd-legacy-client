import { gql } from '@apollo/client';

export const LOGIN = gql`
  query{
    login(data: Object!) {
      id
      email
    }
  }
`