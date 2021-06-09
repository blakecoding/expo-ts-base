import ACTION, { IAction } from "../constants/ActionName";

export const isDarkTheme = (payload: any): IAction => ({
  type: ACTION.IS_DARK_THEME,
  payload,
});
