import Navbar from "@/components/atoms/Navbar";
import { CreateUserForm } from "@/components/organisms/user/CreateUserForm";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <CreateUserForm />
      </div>
      <h1>Home</h1>
    </>
  );
};
