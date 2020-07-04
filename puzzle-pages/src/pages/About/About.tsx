import * as React from 'react';
import HomeButton from '../../components/HomeButton';

// TODO write test

const About = () => (
  <>
    <HomeButton />
    <div className="about">{`That's what I'm about.`}</div>
  </>
);

export default About;
