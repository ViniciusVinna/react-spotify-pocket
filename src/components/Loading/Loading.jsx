import React from 'react';
import PropTypes from 'prop-types';

import './Loading.scss';

const Loading = ({ text }) => (
  <React.Fragment>
    <div className="loading" data-testid="loading">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>

    <p className="loading__text">
      {text}
    </p>
  </React.Fragment>
);

Loading.propTypes = {
  text: PropTypes.string,
}

Loading.defaultProps = {
  text: 'Carregando...',
}


export default Loading;
