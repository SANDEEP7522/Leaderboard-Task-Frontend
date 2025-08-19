import { createUserRequest } from "@/apis/user";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: createUserRequest,
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
      });
    },
  });
};
