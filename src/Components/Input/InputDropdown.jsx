/* eslint-disable react/prop-types */
import { Space, Select, Input } from "antd";
const InputDropdown = ({ options, defaultValue, placeholder }) => {
  return (
    <Space.Compact className="w-full">
      <Input className="px-3 h-[38px]" placeholder={placeholder} />
      <Select
        defaultValue={defaultValue}
        className="h-[38px]"
        options={options}
        // popupClassName="custom_select"
        optionRender={(option) => {
          console.log(option);
          return (
            <div className="font-normal text-sm">
              <p>{option.data.label}</p>
              <p>{option.data.desc}</p>
            </div>
          );
        }}
      />
    </Space.Compact>
  );
};

export default InputDropdown;
