import { config } from '../config';

const { spotify } = config;

const defaultOptions = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'method': 'GET',
};

export const endpoints = {
  getAuthorization: {
    url: `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`,
    options: {
      method: 'GET'
    }
  },
  getCategories: {
    url: `${spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`,
    options: defaultOptions,
  },
  getCategoryPlaylists: {
    url: `${spotify.webAPI}/browse/categories/{categoryId}/playlists`,
    options: defaultOptions,
  },
  getPlaylistTracks: {
    url: `${spotify.webAPI}/playlists/{playlistId}/tracks`,
    options: defaultOptions,
  },
  getUserProfile: {
    url: `${spotify.webAPI}/me`,
    options: defaultOptions,
  },
}
