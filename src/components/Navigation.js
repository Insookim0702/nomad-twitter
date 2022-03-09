import "./Style.css";
import twitter from "assets/twitter.svg";
const { Link } = require("react-router-dom");
const Navigation = () => {
    return (
        <nav className="globalHeader">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>
                </li>
            </ul>
            <img src={twitter} alt="" className="logo" />
        </nav>
    );
};

export default Navigation;
