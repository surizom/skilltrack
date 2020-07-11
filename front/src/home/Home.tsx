import React from 'react';
import type CSS from 'csstype';
import { primary, whiteBackground } from '../common/style/palette';

const style: CSS.Properties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  backgroundColor: whiteBackground,
  color: primary,
  fontSize: '10vh',
  fontWeight: 'bold',
  padding: '5vh',
  textAlign: 'center',
};

const Home: React.FunctionComponent = () => (
  <div style={style}>Welcome to SkillTrack !</div>
);

export default Home;
