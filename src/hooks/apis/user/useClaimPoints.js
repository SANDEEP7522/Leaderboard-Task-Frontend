
import { claimPointsRequest } from "@/apis/user";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useClaimPoints = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, token }) => claimPointsRequest(userId, token),
    onSuccess: (data) => {
      toast({ title: "Success", description: data.message });
      queryClient.invalidateQueries(["users"]); // refresh users list
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
      });
    },
  });
};
