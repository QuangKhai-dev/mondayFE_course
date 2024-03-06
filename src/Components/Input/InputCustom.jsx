/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const InputCustom = ({
  placeholder,
  onChange,
  onBlur,
  value,
  name,
  error,
  touched,
  id,
  label,
}) => {
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
        type="text"
        placeholder={placeholder}
        value={value}
        id={id}
        className={`py-2 px-4 rounded border focus-visible:outline-none w-full ${
          error && touched
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : "border-gray-400 hover:border-black focus:border-black"
        }`}
        name={name}
      />
      {error && touched ? (
        <p className="text-red-500 text-xs text-left mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default InputCustom;
