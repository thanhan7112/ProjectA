import "./Main.css";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div className="MenuMain">
        <div className="Logo"></div>
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
          <Link to="/Lunacian" className="nav-link">
            <h3>Lunacian</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Menu;