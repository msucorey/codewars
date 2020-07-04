import * as React from 'react';
import HomeButton from '../../components/HomeButton';
import BackButton from '../../components/BackButton';

// TODO write test

const About = () => (
  <div className="about">
    <HomeButton />
    <BackButton />
    <p className="about__content">
      {`That's what I'm about.`}
    </p>
  </div>
);

export default About;
