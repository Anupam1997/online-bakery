import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = Boolean(localStorage.getItem("username"));
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}
