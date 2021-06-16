import axiosInstance from "../AxiosInstance";

export function register(data: any) {
  return axiosInstance.post(`/v1/auth/register`, data);
}

export function getUser() {
  return axiosInstance.get(`/user/1OuR3CWOEsfISTpFxsG7`);
}
