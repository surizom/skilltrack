import type { Skill } from '../generated/graphql';
import React from 'react';
import {
  importanceStyle,
  skillListStyle,
  skillNameStyle,
} from './SkillItemstyle';
type Props = Skill;

const SkillItem: React.FunctionComponent<Props> = (props) => (
  <div style={skillListStyle}>
    <div style={skillNameStyle}>{props.name}</div>
    <div style={importanceStyle(props.importance)}>
      Importance: {props.importance}
    </div>
  </div>
);

export default SkillItem;
