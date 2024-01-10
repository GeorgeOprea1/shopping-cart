import "../styles/SignUpComponent.css";
import Navbar from "./Navbar";
import LogoComponent from "./LogoComponent";

const SignUpComponent = () => {
  return (
    <div className="signUp-container">
      <div className="signUp-header">
        <LogoComponent />
        <Navbar />
      </div>
      <img
        src="../src/assets/image5.avif"
        alt="an image with some plants"
        className="image5-sign"
      />
      <img
        src="../src/assets/image1.avif"
        alt="an image with some plants"
        className="image1-sign"
      />
      <form className="form">
        <div className="input-container">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" value="" /*required*/ />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value="" /*required*/ />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value="" /*required*/
          />
        </div>
        <div className="btn-container">
          <button className="signIn">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
