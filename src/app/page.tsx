import { requireAuth } from "@/lib/auth-utils";

const Home = async () => {
  await requireAuth();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center"></div>
  );
};

export default Home;
