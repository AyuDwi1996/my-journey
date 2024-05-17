import * as React from 'react';
import Contact from './modules/views/Contact';
import AppFooter from '../src/modules/views/AppFooter';
import PageHero from './modules/views/PageHero';
import Education from './modules/views/Education';
import Projects from './modules/views/Projects';
import AppAppBar from '../src/modules/views/AppAppBar';
import withRoot from '../src/modules/withRoot';
import ExploreEastBay from './modules/views/ExploreEastBay';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <PageHero />
      <Education />
      <ExploreEastBay/>
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default withRoot(Index);
