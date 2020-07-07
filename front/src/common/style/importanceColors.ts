import { primary, quartenary, quintary, secondary, tertiary } from './palette';

export const importanceToColor = (importance: number) => {
  switch (importance) {
    case 4:
      return quintary;
    case 3:
      return quartenary;
    case 2:
      return tertiary;
    case 1:
      return secondary;
    default:
      return primary;
  }
};
