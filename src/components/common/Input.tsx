import { InputProps } from "../../../prop-types";

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  label,
  onChange,
  value,
  required = false,
  name,
}) => {
  return (
    <label className="flex flex-col item-start mt-4">
      <div>
        {label} {required && <span className="text-red-500">*</span>}
      </div>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        className="border-b border-black px-4 py-2 focus:outline-none"
        name={name}
        multiple={name === "image"}
      />
    </label>
  );
};

export default Input;
