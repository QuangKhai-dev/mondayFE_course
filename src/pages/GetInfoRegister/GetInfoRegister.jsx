import imgRegister from "./../../assets/img/img_getInfoRegister.avif";
import imgLogoMini from "./../../assets/img/logoMiniMonday.png";
import InputCustom from "../../Components/Input/InputCustom";
const GetInfoRegister = () => {
  return (
    <div className="h-screen flex">
      <div className="info_register_content w-7/12 px-32 py-16">
        <div className="flex flex-col h-full">
          {/* logo  */}
          <div className="flex-1">
            <img className="h-6" src={imgLogoMini} alt="" />
          </div>
          {/* input  */}
          <div className="register_input">
            <h1 className="text-2xl">Create your account</h1>
            <div className="w-3/4 space-y-5">
              <InputCustom
                placeholder="Enter your full name"
                label="Full name"
              />
              <InputCustom
                placeholder="Enter at least 8 characters"
                label="Password"
              />
              <InputCustom
                placeholder="For example, company's or department's name"
                label="Account name"
              />
            </div>
          </div>
          {/* action redirect  */}
          <div className="text-right">
            <button className="bg-blue-500 py-2 px-5 rounded text-white font-light">
              Continue
              <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="info_register_img w-5/12">
        <img className="w-full h-full" src={imgRegister} alt="" />
      </div>
    </div>
  );
};

export default GetInfoRegister;
