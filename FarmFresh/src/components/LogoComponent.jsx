import "../styles/LogoComponent.css";

const LogoComponent = () => {
  return (
    <a href="#home" aria-label="Link to Home page" className="logo-container">
      <img src="../src/assets/logo.svg" alt="logo image" className="logo-img" />
    </a>
  );
};

export default LogoComponent;
