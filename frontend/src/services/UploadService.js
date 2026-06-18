import axios from "axios";

export const uploadPdf = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const API_URL = import.meta.env.VITE_API_URL;

  const response = await axios.post(`${API_URL}/api/upload`, formData);

  return response.data;
};
