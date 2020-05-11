import React  from 'react';
import PropTypes from 'prop-types';

import { Loading, RouteHeader } from '../../components';
import PlaylistItem from './PlaylistItem';

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => (
  <div className="playlists" data-testid="playlists">
    <div className="container">
      <RouteHeader
        categoryName={categoryName}
        path={path}
      />

      {isLoading
        ? (<Loading text="Carregando playlists..."/>)
        : (
          <div className="playlists__content">
            {data.length && data.map(playlist => (
              <PlaylistItem
                categoryId={categoryId}
                description={playlist.description}
                id={playlist.id}
                image={playlist.images[0]}
                key={playlist.id}
                name={playlist.name}
                path={path}
              />
            ))}
          </div>
        )}
    </div>
  </div>
);

Playlists.defaultProps = {
  isLoading: false,
}

Playlists.propTypes = {
  categoryId: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  path: PropTypes.string.isRequired,
}

export default Playlists;

