import axios from "axios";

const API_KEY = process.env.API_KEY;

const ipstack = axios.create({
  baseURL: "http://api.ipstack.com/",
});

export const fetchUserLocation = async () => {
  const { data } = await ipstack.get(`check?access_key=${API_KEY}`);

  return data;
};
