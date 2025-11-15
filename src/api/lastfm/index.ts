import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
if (!API_KEY) {
  throw new Error("Missing VITE_LASTFM_API_KEY in environment variables");
}

export const lastfm: AxiosInstance = axios.create({
  baseURL: "https://ws.audioscrobbler.com/2.0/",
  params: {
    api_key: API_KEY,
    format: "json",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export interface LastfmResponse<T> extends AxiosResponse {
  data: T;
}

lastfm.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("Last.fm API Error:", error, error.config?.url);
    return Promise.reject(error);
  }
);
