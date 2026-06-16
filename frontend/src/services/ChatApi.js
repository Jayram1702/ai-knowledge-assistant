import axios from "axios";

export const sendMessage = async (message) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const response = await axios.post(`${API_URL}/api/chat`, {
    message,
  });

  return response.data;
};
