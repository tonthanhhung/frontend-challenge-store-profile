import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import Input from "../Input/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const InputWithEnability: React.FC<Props> = ({ value, onChange }) => {
  const [enableInput, setEnableInput] = useState(!!value);
  return (
    <div className={"flex w-full mb-4"}>
      <CheckBox checked={enableInput} onChange={setEnableInput} />
      <Input
        disabled={!enableInput}
        className="px-3 py-2 flex-grow"
        value={value}
        onValueChange={({ value }) => onChange(value)}
        placeholder="Write your message"
      />
    </div>
  );
};

export default InputWithEnability;
