import React  from 'react';
import PropTypes from 'prop-types';

import { Loading, RouteHeader } from '../../components';
import Track from './Track';

import './Tracks.scss';

const Tracks = ({ categoryName, data, isLoading, path }) => (
  <div className="tracks" data-testid="tracks">
    <div className="container">
      <RouteHeader
        categoryName={categoryName}
        path={path}
      />

      {isLoading
        ? (<Loading text="Carregando tracks..."/>)
        : (
          <div className="tracks__content">
            {data.length && data.map(({ track }, index) => (<Track key={`${index} - ${track.id}`} track={track} />))}
          </div>
        )}
    </div>
  </div>
);

Tracks.defaultProps = {
  isLoading: false,
}

Tracks.propTypes = {
  categoryName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
}

export default Tracks;

