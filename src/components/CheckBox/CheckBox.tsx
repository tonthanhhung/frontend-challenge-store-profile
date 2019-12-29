import React from "react";
import cx from "classnames";

interface Props {
  label?: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<Props> = ({ label, checked, onChange }) => {
  return (
    <label className="flex justify-start items-start">
      <div
        className={cx(
          "border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500",
          checked ? "bg-green-600" : "bg-white "
        )}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <svg
          className="fill-current hidden w-3 h-3 text-white pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div className="select-none">{label}</div>
    </label>
  );
};

export default CheckBox;
