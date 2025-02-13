
import { useAuth } from "./contexts/authContext";
import { Fragment } from "react";
import { logout } from "./Firebase/firebase";
import "./header.css"

const Header = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
      <div className="HeaderContainer">
        <a className="LinkContainer" href="/">Home</a>
        {currentUser === null && (
          <Fragment>
            <a className="LinkContainer" href="/login">Login</a>
            <a className="LinkContainer" href="/register">Register</a>
          </Fragment>
        )}
        {currentUser && (
          <Fragment >
            <a className="LinkContainer" href="/meme">Meme Generator</a>
            <a className="LinkContainer" href="/drinks">Drinks</a>
            <button  className="logoutContainer" onClick={() => logout()}>LOGOUT</button>
          </Fragment>
          
        )}
      </div>
  );
};
export default Header;