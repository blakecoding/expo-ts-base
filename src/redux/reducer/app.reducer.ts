import ACTION, { IAction } from "../constants/ActionName";

export interface IAppState {
  isDarkTheme: Boolean;
  language: String;
}

const initState: IAppState = {
  isDarkTheme: false,
  language: "en-US",
};

export default function (
  state: IAppState = initState,
  action: IAction
): IAppState {
  switch (action.type) {
    case ACTION.IS_DARK_THEME:
      return Object.assign({}, state, {
        isDarkTheme: action.payload,
      });
    default:
      return state;
  }
}
