import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  onValueChange: (p: NameValuePair) => void;
  invalid?: boolean;
}
const Input: React.FC<Props> = ({ onValueChange, invalid, ...props }) => {
  return (
    <input
      {...props}
      onChange={e =>
        onValueChange({
          name: e.currentTarget.name,
          value: e.currentTarget.value
        })
      }
      className={`bg-white focus:outline-none border rounded  py-2 px-4 block w-full appearance-none leading-normal
        ${invalid ? "border-red-300" : "border-gray-300"} 
        ${props.className}`}
      type="text"
    />
  );
};

export default Input;
