import React from "react";
import welcomeImage from "./../../assets/img/welcome-to-monday.avif";
import ButtonGoogle from "../../Components/Button/ButtonGoogle";
import InputCustom from "../../Components/Input/InputCustom";
import ButtonCustom from "../../Components/Button/ButtonCustom";
const SignUpNew = () => {
  return (
    <div className="h-screen flex">
      {/* content  */}
      <div className="content_signup w-7/12 bg-orange-500">
        <h1>Welcome to monday.com</h1>
        <p>Get started - it{"'"}s free. No credit card needed.</p>
        <ButtonGoogle />
        <div>
          <div className="line_cross"></div>
          <span>Or</span>
          <div className="line_cross"></div>
        </div>
        <InputCustom placeholder="name@company.com" />
        <ButtonCustom content="Continue" />
        <p>
          By proceeding, you agree to the <br />
          <a href="#">Terms of Service</a>
          and
          <a href="#">Privacy Policy</a>
        </p>
        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
      {/* img  */}
      <div className="image_signup w-5/12">
        <img src={welcomeImage} alt="welcome-monday" />
      </div>
    </div>
  );
};

export default SignUpNew;
