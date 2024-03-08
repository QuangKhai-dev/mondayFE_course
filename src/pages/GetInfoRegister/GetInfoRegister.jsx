import imgRegister from "./../../assets/img/img_getInfoRegister.avif";
import imgLogoMini from "./../../assets/img/logoMiniMonday.png";
import InputCustom from "../../Components/Input/InputCustom";
import { useFormik } from "formik";
import * as Yup from "yup";
const GetInfoRegister = () => {
  const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        password: "",
        accountName: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        fullName: Yup.string().required("Vui lòng không bỏ trống"),
        password: Yup.string()
          .min(8, "Vui lòng nhập ít nhất 8 ký tự")
          .required("Vui lòng không bỏ trống"),
        accountName: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });
  // console.log(errors);
  // console.log(touched);
  return (
    <div className="h-screen flex">
      <div className="info_register_content w-7/12 px-32 py-16">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
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
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                error={errors.fullName}
                touched={touched.fullName}
              />
              <InputCustom
                type="password"
                placeholder="Enter at least 8 characters"
                label="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
              <InputCustom
                placeholder="For example, company's or department's name"
                label="Account name"
                name="accountName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.accountName}
                error={errors.accountName}
                touched={touched.accountName}
              />
            </div>
          </div>
          {/* action redirect  */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 py-2 px-5 rounded text-white font-light"
            >
              Continue
              <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="info_register_img w-5/12">
        <img className="w-full h-full" src={imgRegister} alt="" />
      </div>
    </div>
  );
};

export default GetInfoRegister;
