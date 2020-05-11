import UserConstants from '../constants/user';

/*
 * Action Creators
 * https://redux.js.org/basics/actions#action-creators
 */

/**
 * @returns {{payload: *, type: string}}
 */
export const getUserRequest = () => ({
  type: UserConstants.GET_USER_REQUEST,
});

/**
 *
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getUserSuccess = (payload) => {
  const userProfile = {
    email: payload.email,
    name: payload.display_name,
    thumb: payload.images.length ? payload.images[0].url : '',
  }

  return {
    type: UserConstants.GET_USER_SUCCESS,
    payload: { ...userProfile }
  }
};

/**
 *
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getUserFailed = ({ message }) => ({
  type: UserConstants.GET_USER_FAILED,
  payload: { message },
});

/**
 * @returns {{payload: *, type: string}}
 */
export const logout = () => ({
  type: UserConstants.USER_LOGOUT,
  payload: {},
});
