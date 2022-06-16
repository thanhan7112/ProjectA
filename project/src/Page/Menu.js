import "./Main.css";
import { BiHomeAlt, BiBookAlt } from "react-icons/bi";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../Image/axie.png";
function Menu() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  return (
    <div>
      <div className="MenuMain">
        <div className="Logo">
          <img className="LogoImage" src={Logo}></img>
        </div>
        <div className="MenuHome">
          <div className="icon">
            <BiHomeAlt
              style={{
                paddingTop: "20%",
                paddingLeft: "20%",
                fontSize: "20px",
              }}
            />
          </div>
          <Link to="/" className="nav-link">
            <h3>Home</h3>
          </Link>
        </div>

        {/* Sua Home => Lunacian */}
        <div className="MenuLunacian">
          <div className="icon">
            <BiBookAlt
              style={{
                paddingTop: "20%",
                paddingLeft: "20%",
                fontSize: "20px",
              }}
            />
          </div>
          <Link to="/Lunacian" className="nav-link">
            <h3>Lunacian</h3>
          </Link>
        </div>
        {/* <div className="Login">
          <div className="icon">
            <AiOutlineLogin
              style={{
                paddingTop: "20%",
                paddingLeft: "20%",
                fontSize: "20px",
              }}
            />
          </div>
          <Link to="/Login" className="nav-link">
            <h3>Login</h3>
          </Link>
        </div> */}
        <div className="Login">
          {!user && (
            <div>
              <Link to="/login">
                <Button
                  style={{ marginRight: "10px" }}
                  variant="outlined"
                  color="secondary"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outlined" color="secondary">
                  Signup
                </Button>
              </Link>
            </div>
          )}
          {user && (
            <div className="User">
              <div className="NameUser">
              <div className="icon">
            <AiOutlineUser
              style={{
                paddingTop: "15%",
                paddingLeft: "20%",
                fontSize: "20px",
              }}
            />
          </div><h3>{user.name}</h3>
              </div>
              <div className="Logout">
                <Link to="/logout">
                  <Button color="secondary">Logout</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Menu;
