import axios from "axios";

export const getRequest = async ({ url }) => {
  try {
    const response = await axios.get(url);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
export const getRequestById = async ({ url }) => {
  try {
    const response = await axios.get({ url });
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
