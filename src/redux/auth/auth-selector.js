const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.avatar;

const getFetchingCurrentUser = state => state.auth.isGetCurrentUser;

const getCurrentToken = state => state.auth.token;

const getAuthError = state => state.auth.error;

const getIsAuth = state => state.auth.isAuth;

const getUserEmail = state => state.auth.email;

export {
    getIsAuthenticated,
    getUserName,
    getFetchingCurrentUser,
    getCurrentToken,
    getUserAvatar,
    getAuthError,
    getIsAuth,
    getUserEmail,
};
