import { Link } from "react-router-dom";
import "../styles/LogoComponent.css";

const LogoComponent = () => {
  return (
    <Link to="/home" aria-label="Link to Home page" className="logo-container">
      <img src="../src/assets/logo.svg" alt="logo image" className="logo-img" />
    </Link>
  );
};

export default LogoComponent;
