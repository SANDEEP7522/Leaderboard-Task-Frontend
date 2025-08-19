import { getAllUsersRequest } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";

export const useAllUsers = (token) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsersRequest(token),
  });
};
