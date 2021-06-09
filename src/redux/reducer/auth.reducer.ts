import ACTION, { IAction } from "../constants/ActionName";

export interface IAuthState {
  loading: boolean;
  user: any;
}

const initState: IAuthState = {
  loading: false,
  user: null,
};

export default function (
  state: IAuthState = initState,
  action: IAction
): IAuthState {
  switch (action.type) {
    case ACTION.LOGIN:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
