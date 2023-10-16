const testServer = `${import.meta.env.VITE_REACT_APP_BASE_BACK_URL}/api`;
const hostUser = `${import.meta.env.VITE_REACT_APP_BASE_BACK_URL}/api`;

export const auth = {
  settings: `${testServer}/publisher/settings/auth`,
  prelogin: `${hostUser}/account/prelogin`,
  login: `${hostUser}/account/login`,
  devLogin: `${hostUser}/account/login?development`,
  logout: `${hostUser}/account/logout`,
  azureAuth: `${hostUser}/azure/auth`,
  getRefresh: `${hostUser}/account/token/access`
};
