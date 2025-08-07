import axios from "axios";

const getToken = () => {
  const tokenString = localStorage.getItem("accessToken");
  return tokenString ? JSON.parse(tokenString) : null;
};
const instance = axios.create({
  baseURL: "localhost:5000/api", // Adjust the base URL as needed
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token?.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api = {
  get: async (endpoint) => {
    try {
      const response = await instance.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await instance.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await instance.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  patch: async (endpoint, data) => {
    try {
      const response = await instance.patch(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await instance.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  setToken: (newToken) => {
    localStorage.setItem("token", JSON.stringify(newToken));
  },
};

export default api;
