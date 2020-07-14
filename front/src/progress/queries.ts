import { gql } from 'apollo-boost';

export const SKILLS_PROGRESSION = gql`
  {
    skills(count: 10000) {
      name
      evaluationChart {
        dateLabels
        skillLevels
      }
    }
  }
`;
