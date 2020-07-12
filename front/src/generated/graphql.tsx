import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createSkill?: Maybe<Skill>;
  evaluateSkill?: Maybe<Skill>;
};


export type MutationCreateSkillArgs = {
  name: Scalars['String'];
  importance: SkillImportance;
};


export type MutationEvaluateSkillArgs = {
  skillId: Scalars['Int'];
  level: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  skills?: Maybe<Array<Maybe<Skill>>>;
  skill?: Maybe<Skill>;
  evaluations?: Maybe<Array<Maybe<SkillEvaluation>>>;
};


export type QuerySkillsArgs = {
  count?: Maybe<Scalars['Int']>;
};


export type QuerySkillArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryEvaluationsArgs = {
  skillId?: Maybe<Scalars['Int']>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  name: Scalars['String'];
  importance: SkillImportance;
  evaluations?: Maybe<Array<Maybe<SkillEvaluation>>>;
};

export type SkillEvaluation = {
  __typename?: 'SkillEvaluation';
  skillId: Scalars['Int'];
  timestamp: Scalars['Int'];
  level: Scalars['Int'];
};

export enum SkillImportance {
  Optional = 'Optional',
  GoodToKnow = 'Good_to_know',
  Important = 'Important',
  Vital = 'Vital'
}


