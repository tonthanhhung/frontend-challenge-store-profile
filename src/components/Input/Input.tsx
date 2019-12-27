import React from "react";
import classNames from "classNames";

interface Props extends React.HTMLProps<HTMLInputElement> {
  onValueChange: (p: NameValuePair) => void;
  invalid?: boolean;
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
      className={classNames(
        "bg-white focus:outline-none border rounded  py-2 px-4 block w-full appearance-none leading-normal",
        props.invalid ? "border-red-300" : "border-gray-300",
        props.className
      )}
      type="text"
    />
  );
};

export default Input;
