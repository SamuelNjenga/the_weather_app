import axios from "axios";
import { API_BASE_URL } from "../constants";

const API_KEY: string = import.meta.env.VITE_API_KEY;

export const getRealtimeData = async (location: string) => {
  return axios.get(
    `${API_BASE_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`
  );
};

export const getAstronomyData = async () => {
  return axios.get(
    `${API_BASE_URL}/astronomy.json?key=${API_KEY}&q=KENYA&dt=2023-04-02`
  );
};

export const getForecastData = async () => {
  return axios.get(
    `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=KENYA&days=1&aqi=no&alerts=no`
  );
};
