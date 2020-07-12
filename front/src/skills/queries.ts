import { gql } from 'apollo-boost';

export const SKILLS = gql`
  {
    skills(count: 10000) {
      name
      id
      importance {
        label
        value
      }
      resourceUrl
    }
  }
`;

export const CREATE_SKILL = gql`
  mutation CreateSkill($name: String!, $importance: Int!) {
    createSkill(name: $name, importance: $importance) {
      name
      id
    }
  }
`;
