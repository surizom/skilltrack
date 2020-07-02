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
};


export type MutationCreateSkillArgs = {
  name: Scalars['String'];
  importance: Scalars['Int'];
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
  importance: Scalars['Int'];
};


