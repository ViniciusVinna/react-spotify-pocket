import UserConstants from '../constants/user';

const userInitialState = {
  email: '',
  errorMessage: '',
  name: '',
  status: 'idle',
  thumb: '',
}

const userReducer = (state = userInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserConstants.GET_USER_REQUEST:
      return {
        ...state,
        status: 'running',
      };
    case UserConstants.GET_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        status: 'success',
      };
    case UserConstants.GET_USER_FAILED:
      return {
        ...state,
        errorMessage: payload.message,
        status: 'error',
      };
    default:
      return state
  }
}

export default userReducer;
