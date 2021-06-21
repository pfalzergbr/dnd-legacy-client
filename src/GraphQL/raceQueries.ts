import { gql } from '@apollo/client';

export const GET_RACES = gql`
  query {
    getAllRaces{
    id
    name
    description
    favouredClass
    generalTraits {
      traitName
      traitDescription
    }
    checksAndSaves {
      name
      description
    }
    languages {
      baseLanguages
      extraLanguages
    }
  }
  }
`;
