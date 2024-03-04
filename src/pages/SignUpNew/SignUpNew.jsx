import React from "react";
import welcomeImage from "./../../assets/img/welcome-to-monday.avif";
import ButtonGoogle from "../../Components/Button/ButtonGoogle";
import InputCustom from "../../Components/Input/InputCustom";
import ButtonCustom from "../../Components/Button/ButtonCustom";
const SignUpNew = () => {
  return (
    <div className="h-screen flex">
      {/* content  */}
      <div className="w-7/12 flex justify-center">
        <div className="content_signup flex flex-col items-center justify-between h-full text-center">
          <div className="signup_title">
            <h1 className="text-3xl mb-3">Welcome to monday.com</h1>
            <p>Get started - it{"'"}s free. No credit card needed.</p>
          </div>
          <div className="signup_action space-y-5">
            <ButtonGoogle />
            <div className="flex items-center space-x-3">
              <div className="line_cross flex-1 h-[1px] bg-gray-400"></div>
              <span>Or</span>
              <div className="line_cross flex-1 h-[1px] bg-gray-400"></div>
            </div>
            <InputCustom placeholder="name@company.com" />
            <ButtonCustom content="Continue" />
            <p className="space-x-2 text-sm">
              By proceeding, you agree to the <br />
              <a className="style_a" href="#">
                Terms of Service
              </a>
              <span>and</span>
              <a className="style_a" href="#">
                Privacy Policy
              </a>
            </p>
          </div>
          <p className="mb-10 text-sm">
            Already have an account?{" "}
            <a className="style_a" href="#">
              Log in
            </a>
          </p>
        </div>
      </div>
      {/* img  */}
      <div className="image_signup w-5/12">
        <img
          className="w-full h-full"
          src={welcomeImage}
          alt="welcome-monday"
        />
      </div>
    </div>
  );
};

export default SignUpNew;
