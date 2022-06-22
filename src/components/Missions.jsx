import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missionsData from '../data/missions';

class Mission extends React.Component {
  render() {
    const missions = missionsData.map((planet, i) => {
      const { name, year, country, destination } = planet;
      return (
        <MissionCard
          key={ i }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      );
    });

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions }
      </div>
    );
  }
}

export default Mission;
