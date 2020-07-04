import * as React from 'react';
import HomeButton from '../../components/HomeButton';
import BackButton from '../../components/BackButton';

// TODO write test

const About = () => (
  <>
    <HomeButton />
    <BackButton />
    <div className="about">{`That's what I'm about.`}</div>
  </>
);

export default About;
