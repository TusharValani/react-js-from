import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let result = localStorage.getItem("token");
  return (
    <>
      <div>{result ? children : <Navigate to="/"/>}</div>;
    </>
  );
};

export default PrivateRoute;
