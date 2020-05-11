import React  from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

const Categories = ({ data, isLoading, url }) => (
  <div className="categories" data-testid="categories">
    <div className="container">
      <h3 className="categories__title">Categorias</h3>

      {isLoading
        ? (<Loading text="Carregando..." />)
        : (
          <div className="categories__content">
            {data.length && data.map(category => (
              <CategoryItem
                icon={category.icons[0]}
                id={category.id}
                key={category.id}
                name={category.name}
                url={url}
              />
            ))}
          </div>
        )}
    </div>
  </div>
);

Categories.defaultProps = {
  isLoading: false,
}

Categories.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  url: PropTypes.string.isRequired,
}

export default Categories;

