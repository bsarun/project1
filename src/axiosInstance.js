import axiosRetry from 'axios-retry';
import axios from 'axios';
// import { authorizationData, getCurrentStore } from './utils/helpers';
// import {
//   APP_KEY,
//   BASE_URL,
//   GET_ACCESS_TOKEN_URL,
//   SECRET,
//   APP_CONFIG
// } from './constants';
import * as qs from 'qs';

/**
 * Axios wrapper
 * @return {AxiosInstance}
 */
export default function(
  xToken = null,
  tokenType = 'Bearer',
  additionalHeaders = null
) {
  let headers = {
    // 'Content-Type': "application/json",
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  };
//   let authorization = xToken ? xToken : authorizationData().access_token;
    let authorization = null;
  headers['Authorization'] = `${tokenType} ${authorization}`;

  if (additionalHeaders) {
    headers = { ...headers, ...additionalHeaders };
  }
  const instance = axios.create({
    headers
  });

  const retryCondition = error =>
    !error.response || error.response.status == 504;

  axiosRetry(instance, {
    retries: 0,
    retryCondition
  });
  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        error.response.data.error === 'invalid_token'
      ) {
        originalRequest._retry = true;
        let params = qs.stringify({
          refresh_token: 'lorem', //authorizationData().refresh_token,
          grant_type: 'refresh_token'
        });
        let appKey = 'APP_KEY';
        let appSecret = 'SECRET';
        if ('APP_CONFIG'[window.location.hostname]) {
          appKey = 'APP_CONFIG'[window.location.hostname].app_key;
          appSecret = 'APP_CONFIG'[window.location.hostname].secret;
        }
        const authDecoded = appKey + ':' + appSecret;
        const authorization = btoa(authDecoded);
        return axios
          .post('BASE_URL' + 'GET_ACCESS_TOKEN_URL', params, {
            headers: {
              warehouseCode: 'store',//getCurrentStore(),
              Authorization: 'Basic ' + authorization
            }
          })
          .then(({ data }) => {
            originalRequest.headers['Authorization'] =
              'Bearer ' + data.access_token;
            localStorage.setItem('authorization', JSON.stringify(data));
            return axios(originalRequest);
          });
      }

      return Promise.reject(error);
    }
  );
  return instance;
}
