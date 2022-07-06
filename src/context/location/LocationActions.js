import axios from "axios";

const API_KEY = "c07f32ddb4cf88c98389695f30d73453";

const ipstack = axios.create({
  baseURL: "http://api.ipstack.com/",
});

export const fetchUserLocation = async () => {
  const { data } = await ipstack.get(`check?access_key=${API_KEY}`);

  return data;
};

export const searchLocation = async (text) => {
  const { data } = await ipstack.get(`${text}?access_key=${API_KEY}`);

  return data;
};
