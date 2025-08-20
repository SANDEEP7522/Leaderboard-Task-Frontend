import { getRankingsRequest } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";

export const useRankings = (token) => {
  return useQuery({
    queryKey: ["rankings"],
    queryFn: () => getRankingsRequest(token),
    enabled: !!token,
  });
};
