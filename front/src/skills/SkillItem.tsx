import type { Skill } from '../generated/graphql';
import React from 'react';

type Props = Skill;

const SkillItem: React.FunctionComponent<Props> = (props) => (
  <div>
    {props.name} - Importance: {props.importance}
  </div>
);

export default SkillItem;
