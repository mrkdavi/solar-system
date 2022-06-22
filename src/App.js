import React from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Mission />
      </>
    );
  }
}

export default App;
