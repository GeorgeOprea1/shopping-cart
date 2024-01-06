import "./styles/App.css";
import { useState } from "react";
import HomeComponent from "./components/HomeComponent";
import SignUpComponent from "./components/SignUpComponent";

function App() {
  const [signUp, setSignUp] = useState(false);

  function signUpClicked() {
    setSignUp(true);
    console.log(signUp);
  }
  return (
    <div className="app-container">
      {signUp ? (
        <SignUpComponent />
      ) : (
        <HomeComponent signUpClicked={signUpClicked} />
      )}
    </div>
  );
}

export default App;
