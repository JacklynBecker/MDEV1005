
import { useAuth } from "./contexts/authContext";
import { Fragment } from "react";
import { logout } from "./Firebase/firebase";
import "./header.css"

const Header = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div>
      <div className="HeaderContainer">
        <a className="LinkContainer" href="/">Home</a>
        {currentUser === null && (
          <Fragment>
            <a className="LinkContainer" href="/login">Login</a>
            <a className="LinkContainer" href="/register">Register</a>
          </Fragment>
        )}
      </div>
      <div className="HeaderContainer">
        {currentUser && (
          <div>
            {currentUser.username} <span  className="logoutContainer" onClick={() => logout()}>Logout</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;