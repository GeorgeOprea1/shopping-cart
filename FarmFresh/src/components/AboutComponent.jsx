import "../styles/AboutComponent.css";
import Navbar from "./Navbar";
import LogoComponent from "./LogoComponent";

const AboutComponent = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <LogoComponent />
        <Navbar />
      </div>
      <div className="about-info-container">
        <h1>About Us</h1>
        <p>
          At our core, we are driven by a singular mission: to centralize
          agricultural essentials, empowering farmers with convenient access to
          an extensive array of seeds and fertilizers. We believe in more than
          just transactions; we aim to cultivate a community where expertise and
          resources converge.
        </p>
        <p>
          Our commitment extends beyond mere product provision. We stand firm in
          our dedication to equipping farmers not only with the tools they need
          but also with the indispensable knowledge required to make informed
          decisions. By consolidating a diverse range of agricultural essentials
          into one accessible platform, we simplify the procurement process
          while fostering a deeper understanding of seed varieties and product
          functionalities.
        </p>
        <p>
          With a focus on accessibility and education, we strive to create a
          seamless experience for farmers, ensuring they can effortlessly
          navigate our platform to acquire supplies and expand their
          agricultural prowess. Join us in our endeavor to transform the
          agricultural landscape, uniting convenience with comprehensive
          guidance for the cultivation of thriving farms.
        </p>
        <p>
          Through collaborative partnerships with industry experts and seasoned
          agriculturists, we curate a repository of insights and best practices.
          Our aim is to empower farmers, whether seasoned veterans or new
          cultivators, with a wealth of knowledge that transcends mere product
          transactions.
        </p>
        <p>
          Join us on this expedition toward agricultural enlightenment. Explore
          a platform that not only caters to your agricultural needs but also
          serves as a beacon of enlightenment, empowering you to sow the seeds
          of success and reap bountiful harvests.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
