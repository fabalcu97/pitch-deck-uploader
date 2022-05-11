import axios from 'axios';
import environment from 'utils/config/env';

export const apiInstance = axios.create({
  baseURL: environment.apiBaseUrl,
});
