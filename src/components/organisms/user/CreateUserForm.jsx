import { useCreateUser } from "@/hooks/apis/user/useCreateUser";
import { useState } from "react";

export const CreateUserForm = () => {
  const [name, setName] = useState("");
  const { mutate: createUser, isPending } = useCreateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ name });
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isPending ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
};
