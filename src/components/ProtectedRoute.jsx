import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const user = useSelector(state => state.auth.user);
  if (user.name) {
    return <Navigate to="/login" replace />
  }
  return children;
}

export default ProtectedRoute;