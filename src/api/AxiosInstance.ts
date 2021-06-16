import axios from "axios";
import _ from "lodash";
import qs from "qs";
import Constants from "expo-constants";

import ACTION from "../redux/constants/ActionName";
import { store } from "../redux/store/store";

const BASE_URL = Constants.manifest.extra?.BASE_URL;

const ignored401URLs = [
  `${BASE_URL}/notification/fcmToken`,
  `${BASE_URL}/user/info`,
];

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    "app-id": "60c9d802789b6a71d1655779",
  },
  transformResponse: [
    // Trim before
    (data) => {
      return data.trim();
    },
    // Parse
    (data) => {
      let transformData = null;
      // console.log(data)
      try {
        transformData = JSON.parse(data);
        return transformData;
      } catch (e) {
        return transformData;
      }
    },
  ],
});

axiosInstance.interceptors.request.use(
  function (config) {
    console.log("%cREQUEST: ", "color:purple", config?.url);
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("%cRESPONSE: ", "color:green", { response });
    return response;
  },
  (error) => {
    console.log("AXIOS ERROR", { error });
    if (error.response && error.response.status === 401) {
      store.dispatch({
        type: ACTION.LOGOUT,
      });
      console.log(ignored401URLs, error.config.url);
      if (!ignored401URLs.includes(error.config.url)) {
        // showToastError(translate("login_required"))
      }
    }
    return Promise.reject(error.message);
  }
);

store.subscribe(() => {
  const currentState = store.getState();
  const token = _.get(currentState, "auth.token", null);
  if (token !== null) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    axiosInstance.defaults.headers.Authorization = null;
  }
});

export default axiosInstance;
