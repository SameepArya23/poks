import { useAppStore } from "@/store";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: Props) => {
  const { access, user } = useAppStore();
  // console.log(access, user);
  if (access && user?.role == "USER") {
    // <Navigate to={"/home"} />;
    location.href = '/home'
  } else {
    return children;
  }
};

export default ProtectedRoutes;
