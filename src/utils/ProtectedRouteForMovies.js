import { Navigate } from "react-router-dom";

function ProtectedRouteForMovies({ element: Component, ...props }) {
    return props.loggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to="/signin" replace />
    );
  }
  
  export default ProtectedRouteForMovies;