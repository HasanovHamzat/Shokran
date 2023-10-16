import axios from "axios";

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_BASE_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json"
  }
});
