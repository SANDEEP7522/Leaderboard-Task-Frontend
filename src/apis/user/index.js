import axios from "@/config/axiosConfig";

export const createUserRequest = async ({ name }) => {
  try {
    const response = await axios.post("/users", {
      name,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};

export const getAllUsersRequest = async (token) => {
  try {
    const response = await axios.get("/users/all", {
      headers: {
        "x-access-token": token, // agar auth lagana hai
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};

export const claimPointsRequest = async (userId, token) => {
  try {
    const response = await axios.post(
      `/users/${userId}/claim`,
      {},
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};

export const getRankingsRequest = async (token) => {
  try {
    const response = await axios.get("/users/rankings", {
      headers: {
        "x-access-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};
