import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { Player } from '../';

import './Dashboard.scss';

const Dashboard = ({ children }) => {
  const playerHeight = useSelector(state => state.content.playerHeight);

  return (
    <div
      className="dashboard"
      data-testid="dashboard"
      style={{paddingBottom: `${playerHeight}px` }}
    >
      {children}

      <Player />
    </div>
  );
};

Dashboard.defaultProps = {
  children: [],
}

Dashboard.propTypes = {
  children: PropTypes.node,
}

export default Dashboard;

