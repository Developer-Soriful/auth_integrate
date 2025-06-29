import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
