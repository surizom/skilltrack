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

export type EvaluationChart = {
  __typename?: 'EvaluationChart';
  dateLabels?: Maybe<Array<Maybe<Scalars['String']>>>;
  skillLevels?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createSkill?: Maybe<Skill>;
  evaluateSkill?: Maybe<Skill>;
};


export type MutationCreateSkillArgs = {
  name: Scalars['String'];
  importance: SkillImportanceLabel;
  resourceUrl?: Maybe<Scalars['String']>;
};


export type MutationEvaluateSkillArgs = {
  skillId: Scalars['Int'];
  level: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  skills?: Maybe<Array<Maybe<Skill>>>;
  skill?: Maybe<Skill>;
};


export type QuerySkillsArgs = {
  count?: Maybe<Scalars['Int']>;
};


export type QuerySkillArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  name: Scalars['String'];
  importance: SkillImportance;
  resourceUrl?: Maybe<Scalars['String']>;
  evaluationChart?: Maybe<EvaluationChart>;
};

export type SkillImportance = {
  __typename?: 'SkillImportance';
  label: SkillImportanceLabel;
  value: Scalars['Int'];
};

export enum SkillImportanceLabel {
  Optional = 'Optional',
  GoodToKnow = 'Good_to_know',
  Important = 'Important',
  Vital = 'Vital'
}


