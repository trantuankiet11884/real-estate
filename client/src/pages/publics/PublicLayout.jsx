import { Header } from "@/components/headers";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
