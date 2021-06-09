import ACTION, { IAction } from "../constants/ActionName";

export const login = (payload: any): IAction => ({
  type: ACTION.LOGIN,
  payload,
});

export const loginSuccess = (): IAction => ({
  type: ACTION.LOGIN_SUCCESS,
});

export const loginFalse = (): IAction => ({
  type: ACTION.LOGIN_FAIL,
});
