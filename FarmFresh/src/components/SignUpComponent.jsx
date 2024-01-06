import "../styles/SignUpComponent.css";
import Navbar from "./Navbar";

const SignUpComponent = () => {
  return (
    <div className="signUp-container">
      <div className="signUp-header">
        <Navbar />
      </div>
      <img
        src="../src/assets/image5.avif"
        alt="an image with some plants"
        className="image5"
      />
      <img
        src="../src/assets/image1.avif"
        alt="an image with some plants"
        className="image1"
      />
    </div>
  );
};

export default SignUpComponent;
