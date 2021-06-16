import { getUser } from "./auth";

export default class AuthAPI {
  static register(param: any) {}

  static getUser() {
    return getUser().then((res) => res.data);
  }
}
