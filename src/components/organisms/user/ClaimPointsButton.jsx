import { useClaimPoints } from "@/hooks/apis/user/useClaimPoints";
import { useAuth } from "@/hooks/context/useAuth";
import { Loader } from "lucide-react";

export const ClaimPointsButton = ({ userId }) => {
  const { auth } = useAuth();
  const { mutate: claimPoints, isPending } = useClaimPoints();

  return (
    <button
      onClick={() => claimPoints({ userId, token: auth?.token })}
      disabled={isPending}
      className="original-box-shadows"
    >
      {isPending ? <Loader className="animate-spin ml-2" /> : "Claim Points"}
    </button>
  );
};
