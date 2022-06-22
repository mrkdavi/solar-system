import React from 'react';
import Title from './Title';
import planetsData from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planets = planetsData.map((planet, i) => {
      const { name, image } = planet;
      return <PlanetCard key={ i } planetName={ name } planetImage={ image } />;
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets }
      </div>
    );
  }
}

export default SolarSystem;
