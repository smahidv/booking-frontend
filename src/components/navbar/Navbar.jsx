import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking</span>
        </Link>
        {user && (
          <div
            style={{ color: "green", fontFamilly: "cursive", fontSize: "16px" }}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{
                "--fa-primary-color": "#b4d9c3",
                "--fa-secondary-color": "#cee9d1",
              }}
            />
            &nbsp; &nbsp;
            {user.username}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
