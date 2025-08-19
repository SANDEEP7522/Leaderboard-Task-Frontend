import Navbar from "@/components/atoms/Navbar";
import { AllUsersContainer } from "@/components/organisms/user/AllUsersContainer";
import { CreateUserForm } from "@/components/organisms/user/CreateUserForm";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <CreateUserForm />
        <AllUsersContainer />
      </div>
      <h1>Home</h1>
    </>
  );
};
