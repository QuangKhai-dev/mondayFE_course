import React from "react";
import imgRegister from "./../../assets/img/img_getInfoRegister.avif";
import imgLogoMini from "./../../assets/img/logoMiniMonday.png";
import InputCustom from "../../Components/Input/InputCustom";
const GetInfoRegister = () => {
  return (
    <div className="h-screen flex">
      <div className="info_register_content w-7/12">
        {/* logo  */}
        <div>
          <img src={imgLogoMini} alt="" />
        </div>
        {/* input  */}
        <div>
          <h1>Create your account</h1>
          <InputCustom placeholder="Enter your full name" />
          <InputCustom placeholder="Enter at least 8 characters" />
          <InputCustom placeholder="For example, company's or department's name" />
        </div>
        {/* action redirect  */}
        <div>
          <button>Continue</button>
        </div>
      </div>
      <div className="info_register_img w-5/12">
        <img className="w-full h-full" src={imgRegister} alt="" />
      </div>
    </div>
  );
};

export default GetInfoRegister;
