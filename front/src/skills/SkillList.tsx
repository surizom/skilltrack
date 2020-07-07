import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SKILLS } from './queries';
import type { Skill } from '../generated/graphql';
import SkillItem from './SkillItem';

const SkillList: React.FunctionComponent = ({}) => {
  const { loading, error, data } = useQuery<{ skills: Skill[] }>(SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (!data || !data.skills || !data.skills.length) {
    return <div>No skills to show</div>;
  }

  return (
    <div>
      {data.skills.map((skill) => (
        <SkillItem key={skill.id} {...skill} />
      ))}
    </div>
  );
};

export default SkillList;
