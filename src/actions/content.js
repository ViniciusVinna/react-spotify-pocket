import ContentConstants from '../constants/content';

/*
 * Action Creators
 * https://redux.js.org/basics/actions#action-creators
 */

/**
 * @param {string} track
 * @returns {{payload: *, type: string}}
 */
export const addTrackToPlayer = (track) => ({
  type: ContentConstants.ADD_PLAYER_TRACK,
  payload: track,
});

/**
 * @returns {{payload: *, type: string}}
 */
export const getCategoriesRequest = () => ({
  type: ContentConstants.GET_CATEGORIES_REQUEST,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoriesSuccess = ({ categories  }) =>  {
  return {
    type: ContentConstants.GET_CATEGORIES_SUCCESS,
    payload: categories.items,
  };
};

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoriesFailed = ({ message }) => ({
  type: ContentConstants.GET_CATEGORIES_FAILED,
  payload: { message },
});

/**
 * @returns {{payload: *, type: string}}
 */
export const getCategoryPlaylistRequest = () => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_REQUEST,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoryPlaylistSuccess = ({ playlists  }) =>  ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_SUCCESS,
  payload: playlists.items,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoryPlaylistFailed = ({ message }) => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_FAILED,
  payload: { message },
});

/**
 * @returns {{payload: *, type: string}}
 */
export const getPlaylistTracksRequest = () => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_REQUEST,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getPlaylistTracksSuccess = ({ items  }) =>  ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getPlaylistTracksFailed = ({ message }) => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_FAILED,
  payload: { message },
});

/**
 * @returns {{payload: {}, type: string}}
 */
export const removeTrackToPlayer = () => ({
  type: ContentConstants.REMOVE_PLAYER_TRACK,
});

/**
 * @returns {{payload: {}, type: string}}
 */
export const setPlayerHeight = (height) => ({
  type: ContentConstants.SET_PLAYER_HEIGHT,
  payload: height,
});
