import axios from 'axios';
import BASE_URL from './config';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/swagger#/User/UserController_create`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.response?.data || error.message);
    throw error.response?.data || { message: error.message };
  }
};
