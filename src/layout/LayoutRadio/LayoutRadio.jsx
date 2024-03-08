import { Radio } from "antd";
const LayoutRadio = ({ items, title, onChange }) => {
  return (
    <div className="radio_style">
      <h2 className="text-2xl mb-5">{title}</h2>
      <Radio.Group onChange={onChange}>
        {items.map((item, index) => {
          return (
            <Radio value={item.value} key={index}>
              {item.content}
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  );
};

export default LayoutRadio;
