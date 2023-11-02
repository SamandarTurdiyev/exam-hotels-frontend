import { useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane, faTaxi, faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [profile, setProfile] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); 

    setProfile(false); 
  };

  return (
    <>
      <div className="nav">
        <div className="navbar">
          <div className="navContainer">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <span className="logo">Bookin.com (Beta)</span>
            </Link>
            {user ? (
              <div className="navbarListItem">
                <div className={`navbarListItem ${profile ? "active" : ""}`} onClick={() => setProfile(!profile)}>
                  <FontAwesomeIcon icon={faUser} />
                  <p>{user.username}</p>
                </div>

                <div>
                  <button className="navbarLogOutBtn" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="navItems">
                <Link to="/register" elemen><button className="navButton">Register</button></Link>

                <Link to="/login" elemen><button className="navButton">Login</button></Link>
              </div>
            )}
          </div>
        </div>

        <div className="headerL">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Hotels</span>
            </div>
            {/* <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;