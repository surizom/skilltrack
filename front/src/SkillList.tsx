import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SKILLS } from './queries';

const SkillList : React.FunctionComponent = () => {

  const {loading, error, data}= useQuery(SKILLS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data && data.skills && data.skills.map(({name, id, importance}:{name: string, id:string, importance:number})=> <div key={id}>{name}</div>)
}

export default SkillList;