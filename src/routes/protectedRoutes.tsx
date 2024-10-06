import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: Props) => {
  if (location.pathname == "/") {
    <Navigate to={"/home"} />;
  } else {
    return children;
  }
};

export default ProtectedRoutes;
