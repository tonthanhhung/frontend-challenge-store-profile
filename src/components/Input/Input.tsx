import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  onValueChange: (p: NameValuePair) => void;
}
const Input: React.FC<Props> = props => {
  return (
    <input
      {...props}
      onChange={e =>
        props.onValueChange({
          name: e.currentTarget.name,
          value: e.currentTarget.value
        })
      }
      className={
        "bg-white focus:outline-none border rounded border-gray-300 py-2 px-4 block w-full appearance-none leading-normal " +
        props.className
      }
      type="text"
    />
  );
};

export default Input;
