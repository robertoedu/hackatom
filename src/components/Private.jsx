import { Outlet , Navigate } from "react-router-dom";
import { isLogin } from './CheckUser' 

function PrivateRoute() {

  // If Token Is OK Show Pages Else Goes To Login Page
  return isLogin() ? <Outlet/> : <Navigate to="/" />;
}

export default PrivateRoute