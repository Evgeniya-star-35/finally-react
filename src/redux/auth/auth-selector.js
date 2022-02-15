const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatar;

const getFetchingCurrentUser = state => state.auth.isGetCurrentUser;

const getCurrentToken = state => state.auth.token;

const getAuthError = state => state.auth.error;

const getIsAuth = state => {
    console.log(state.auth.isAuth);
    return state.auth.isAuth;
};

const getUserEmail = state => state.auth.user.email;

const getCurrentBalanceSelector = state => {
    return state?.auth?.user?.balance;
};
export {
    // getTotalBalance,
    getIsAuthenticated,
    getUserName,
    getFetchingCurrentUser,
    getCurrentToken,
    getUserAvatar,
    getAuthError,
    getIsAuth,
    getUserEmail,
    getCurrentBalanceSelector,
};
