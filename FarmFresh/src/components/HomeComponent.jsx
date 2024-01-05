import Navbar from "./Navbar";
import LogoComponent from "./LogoComponent";
import "../styles/HomeComponent.css";
const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <LogoComponent />
        <Navbar />
      </div>
      <img
        src="../src/assets/image1.avif"
        alt="an image with some plants"
        className="image1"
      />
      <img
        src="../src/assets/image3.jpeg"
        alt="an image with some plants"
        className="image3"
      />
      <img
        src="../src/assets/image4.avif"
        alt="an image with some plants"
        className="image4"
      />
    </div>
  );
};

export default HomeComponent;
