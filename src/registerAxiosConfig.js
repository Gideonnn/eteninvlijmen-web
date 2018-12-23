import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : '';

axios.interceptors.request.use(config => {
  if (process.env.VUE_APP_AWS_API_KEY) {
    return {
      ...config,
      headers: { 'x-api-key': process.env.VUE_APP_AWS_API_KEY },
    };
  }

  return config;
});
