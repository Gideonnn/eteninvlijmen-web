import axios from 'axios';

axios.interceptors.request.use(config => {
  if (process.env.VUE_APP_AWS_API_KEY) {
    return {
      ...config,
      headers: { 'x-api-key': process.env.VUE_APP_AWS_API_KEY },
    };
  }

  return config;
});
