
import { useAuth } from "./contexts/authContext";
import { Fragment } from "react";
import { logout } from "./Firebase/firebase";
import { useRouter } from "next/navigation";
import "./header.css"

const Header = () => {
  //get currentUser and display different header links based on if user is logged in 
  const { currentUser } = useAuth();
  const router = useRouter();
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
            <button  className="logoutContainer" onClick={() => {logout(); router.push("/");}}>LOGOUT</button>
          </Fragment>
          
        )}
      </div>
  );
};
export default Header;