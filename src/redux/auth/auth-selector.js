const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatarURL;

const getFetchingCurrentUser = state => state.auth.isGetCurrentUser;

const getCurrentToken = state => state.auth.token;

const getAuthError = state => state.auth.error;

const getIsAuth = state => state.auth.isAuth;

export {
    getIsAuthenticated,
    getUserName,
    getFetchingCurrentUser,
    getCurrentToken,
    getUserAvatar,
    getAuthError,
    getIsAuth,
};
