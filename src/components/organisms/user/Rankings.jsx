import { useRankings } from "@/hooks/apis/user/useRankings";
import { useAuth } from "@/hooks/context/useAuth";
import { Loader } from "lucide-react";

export const Rankings = () => {
  const { auth } = useAuth();
  const { data, isLoading, isError, error } = useRankings(auth?.token);

  if (isLoading)
    return (
      <p>
        <Loader className="animate-spin ml-2" />
      </p>
    );
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="px-4 py-2 font-semibold">{user.rank}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
