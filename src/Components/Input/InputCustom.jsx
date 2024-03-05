// eslint-disable-next-line react/prop-types
const InputCustom = ({ placeholder, onChange, onBlur, value, id, label }) => {
  return (
    <div>
      {label ? (
        <label className="text-sm mb-2 inline-block" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        onChange={onChange}
        onBlur={onBlur}
        className="py-3 px-4 rounded border border-gray-400 hover:border-black focus:border-black focus-visible:outline-none w-full"
        type="text"
        placeholder={placeholder}
        value={value}
        id={id}
      />
    </div>
  );
};

export default InputCustom;
