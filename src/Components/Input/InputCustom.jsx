// eslint-disable-next-line react/prop-types
const InputCustom = ({ placeholder, onChange, onBlur, value }) => {
  return (
    <div>
      <input
        onChange={onChange}
        onBlur={onBlur}
        className="py-2 px-4 rounded border border-gray-400 hover:border-black focus:border-black focus-visible:outline-none w-full"
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputCustom;
