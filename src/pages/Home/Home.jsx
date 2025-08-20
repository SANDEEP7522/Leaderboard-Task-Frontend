import Navbar from "@/components/atoms/Navbar";
import { AllUsersContainer } from "@/components/organisms/user/AllUsersContainer";
import { CreateUserForm } from "@/components/organisms/user/CreateUserForm";
import { Rankings } from "@/components/organisms/user/Rankings";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
          Leaderboard Task
        </h1>

        {/* Create User Form */}
        <div className="mb-8">
          <CreateUserForm />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Middle: All Users (takes 2/3 on large screens) */}
          <div className="lg:col-span-2">
            <AllUsersContainer />
          </div>

          {/* Right Side: Rankings */}
          <div className="lg:col-span-1">
            <Rankings />
          </div>
        </div>
      </div>
    </>
  );
};
