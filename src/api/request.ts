// Packages
import axios from 'axios';

/**
 * URL to backend.
 *
 * @returns {string} URL to backend.
 */
const ApiBaseUrl = (): string => {
  if (process.env.VUE_APP_ENVIRONMENT !== 'development') {
    return 'https://united-printing-backend.vercel.app/api';
  }
  return 'http://localhost:3000/api';
};

/**
 * Axios instance set up for the API.
 */
const request = axios.create({
  baseURL: ApiBaseUrl(),
});

export default request;
