import { combineReducers } from "redux";
import app, { IAppState } from "./app.reducer";
import auth, { IAuthState } from "./auth.reducer";

export interface IState {
  app: IAppState;
  auth: IAuthState;
}

export default combineReducers({
  app,
  auth,
});
