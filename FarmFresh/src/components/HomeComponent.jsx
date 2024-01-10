import Navbar from "./Navbar";
import LogoComponent from "./LogoComponent";
import "../styles/HomeComponent.css";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="home-container" id="home">
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

      <div className="info-container">
        <h1>
          Get all of your important agricultural supplies and fertilizers seed
          in one place.
        </h1>
        <p>
          Our major goal is to give all of the items in one location so that
          farmers can easily purchase seeds and fertilizers while also providing
          the necessary seed and product knowledge.
        </p>
        <Link to="/sign" className="btn-container">
          <button className="signInBtn">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;
