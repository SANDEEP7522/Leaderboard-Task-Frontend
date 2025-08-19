import { useAllUsers } from "@/hooks/apis/user/useAllUsers";
import { useAuth } from "@/hooks/context/useAuth";

export const AllUsersContainer = () => {
  const { auth } = useAuth();
  const { data, isLoading, isError, error } = useAllUsers(auth?.token);

  if (isLoading) return <p className="text-center p-6">Loading users...</p>;
  if (isError)
    return (
      <p className="text-center p-6 text-red-500">Error: {error.message}</p>
    );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">All Users</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data?.map((user) => (
          <div
            key={user._id}
            className="bg-white border rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <p className="font-semibold text-lg text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500">
              Points: <span className="font-medium">{user.totalPoints}</span>
            </p>
            <p className="text-sm text-gray-500">
              Created: {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              Updated: {new Date(user.updatedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
