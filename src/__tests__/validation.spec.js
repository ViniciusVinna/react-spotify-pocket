import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

import {
  Loading,
  Logo,
  RouteHeader,
  WelcomeBox
} from '../components';

import {
  App,
  Authorize,
  Categories,
  CategoryItem,
  Login,
  PlaylistItem,
  Playlists,
} from '../containers';

import categoriesMock from './mocks/categories.json';
import playlistsMock from './mocks/playlists.json';
import tracksMock from './mocks/tracks.json';
import userMock from './mocks/user.json';
import storeMock from './mocks/store.json';

const history = createMemoryHistory();

describe('Spotify Pocket', () => {
  describe('Components data-testid match', () => {
    it('should should render properly the <Loading> component', () => {
      const { getByTestId } = render(<Loading />);
      const container = getByTestId('loading');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Logo> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Logo />
        </Router>
      );
      const container = getByTestId('logo');

      expect(container).toBeDefined();
    });

    it('should should render properly the <RouteHeader> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <RouteHeader categoryName="Título da categoria" />
        </Router>
      );
      const container = getByTestId('route-header');

      expect(container).toBeDefined();
    });

    it('should should render properly the <WelcomeBox> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <WelcomeBox />
        </Router>
      );
      const container = getByTestId('welcome-box');

      expect(container).toBeDefined();
    });
  })

  describe('Containers data-testid match', () => {
    it('should should render properly the <App> container', () => {
      const { getByTestId } = render(<App />);
      const container = getByTestId('app');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Authorize> container', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Authorize />
        </Router>
      );
      const container = getByTestId('callback');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Categories> container', () => {
      const categories = categoriesMock.items;
      const { getByTestId } = render(
        <Router history={history}>
          <Categories data={categories} url="/dashboard" isLoading={false} />
        </Router>
      );
      const container = getByTestId('categories');

      expect(container).toBeDefined();
    });

    it('should should render properly the <CategoryItem> container', () => {
      const category = categoriesMock.items[0];
      const { getByTestId } = render(
        <Router history={history}>
          <CategoryItem
            icon={category.icons[0]}
            id={category.id}
            key={category.id}
            name={category.name}
            url="/dashboard"
          />
        </Router>
      );
      const container = getByTestId('category');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Login> container', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Login />
        </Router>
      );
      const container = getByTestId('login');

      expect(container).toBeDefined();
    });

    it('should should render properly the <PlaylistItem> container', () => {
      const playlist = playlistsMock.items[0];
      const { getByTestId } = render(
        <Router history={history}>
          <PlaylistItem
            categoryId="abcde"
            description={playlist.description}
            id={playlist.id}
            image={playlist.images[0]}
            key={playlist.id}
            name={playlist.name}
            path="/abcde"
          />
        </Router>
      );
      const container = getByTestId('playlist');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Playlists> container', () => {
      const playlists = playlistsMock.items
      const { getByTestId } = render(
        <Router history={history}>
          <Playlists
            categoryId='abcde'
            categoryName='abcde'
            data={playlists}
            isLoading={false}
            path='/abcde'
          />
        </Router>
      );
      const container = getByTestId('playlists');

      expect(container).toBeDefined();
    });
  });
});
