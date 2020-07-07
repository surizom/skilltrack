import React from 'react';
import type CSS from 'csstype';
import { primary, whiteBackground } from '../common/style/palette';

const style: CSS.Properties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: whiteBackground,
  color: primary,
  fontSize: '10vh',
  fontWeight: 'bold',
  padding: '5vh',
};

const Home: React.FunctionComponent = () => (
  <div style={style}>
    <div>Welcome to SkillTrack !</div>
  </div>
);

export default Home;
