export interface IAction {
  type: String;
  payload?: any;
}

const ACTION = {
  // Application
  IS_DARK_THEME: "IS_DARK_THEME",
  // Authentication
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

export default ACTION;
