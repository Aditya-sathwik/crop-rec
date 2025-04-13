// This file contains constants for API endpoints

const API_BASE_URL = "http://localhost:8000";

const API_ENDPOINTS = {
  RECOMMEND_CROP: `${API_BASE_URL}/api/v1/crop/recommendCrop`,
  LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
  SIGNUP: `${API_BASE_URL}/api/v1/auth/signup`,
  LOGOUT: `${API_BASE_URL}/api/v1/auth/logout`,
  REFRESH_TOKEN: `${API_BASE_URL}/api/v1/auth/refresh-token`,
};

export { API_ENDPOINTS };