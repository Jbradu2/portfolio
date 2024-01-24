import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  /* Add global styles here */
`;

const App = () => {
  const [selectedSection, setSelectedSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <AppWrapper>
      <Header />
      <Navigation
        selectedSection={selectedSection}
        onNavigationClick={handleNavigationClick}
      />
      {selectedSection === 'About Me' && <AboutMe />}
      {selectedSection === 'Portfolio' && <Portfolio />}
      {selectedSection === 'Contact' && <Contact />}
      {selectedSection === 'Resume' && <Resume />}
      <Footer />
    </AppWrapper>
  );
};

export default App;