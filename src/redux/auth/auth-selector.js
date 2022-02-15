const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatar;

const getFetchingCurrentUser = state => state.auth.isGetCurrentUser;

const getToken = state => state.auth.token;

const getAuthError = state => state.auth.error;

const getIsAuth = state => state.auth.token;
const getUserEmail = state => state.auth.user.email;

const getCurrentBalanceSelector = state => {
    return state.auth.user.balance;
};
export {
    getIsAuthenticated,
    getUserName,
    getFetchingCurrentUser,
    getToken,
    getUserAvatar,
    getAuthError,
    getIsAuth,
    getUserEmail,
    getCurrentBalanceSelector,
};
