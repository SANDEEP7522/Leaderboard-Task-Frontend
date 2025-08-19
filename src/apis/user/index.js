
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
