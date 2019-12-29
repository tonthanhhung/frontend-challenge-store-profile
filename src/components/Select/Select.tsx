import React from "react";

interface Props extends React.HTMLProps<HTMLSelectElement> {
  optional?: boolean;
  onValueChange: (p: NameValuePair) => void;
}

const Select: React.FC<Props> = ({ optional, onValueChange, ...props }) => {
  return (
    <select
      {...props}
      onChange={e =>
        onValueChange({
          name: e.currentTarget.name,
          value: e.currentTarget.value
        })
      }
      className={
        "bg-white focus:outline-none border rounded border-gray-300 py-2 px-4 block w-full appearance-none leading-normal " +
        props.className
      }
    >
      {optional && <option value="">Please select</option>}
      {props.children}
    </select>
  );
};
export default Select;
