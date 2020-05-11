import AuthConstants from '../constants/auth';

const authInitialState = {
  accessToken: '',
  errorMessage: '',
  expirationTime: '',
  expiresIn: '',
  isLogged: false,
  tokenType: '',
}

const authReducer = (state = authInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AuthConstants.AUTH_CALLBACK_ERROR:
      return {
        ...state,
        accessToken: '',
        errorMessage: payload,
        expiresIn: '',
        isLogged: false,
        tokenType: '',
      };
    case AuthConstants.AUTH_CALLBACK_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        errorMessage: '',
        expirationTime: new Date().getTime() + parseInt(payload.expiresIn),
        expiresIn: payload.expiresIn,
        isLogged: true,
        tokenType: payload.tokenType,
      }
    default:
      return state
  }
}

export default authReducer
