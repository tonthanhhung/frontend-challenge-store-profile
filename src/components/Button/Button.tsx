import React from "react";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = props => {
  const buttonVariant = props.default
    ? "bg-green-600 hover:bg-green-500 text-white hover:text-white"
    : "bg-gray-300 hover:bg-gray-400 text-gray-800 hover:text-gray-800";
  return (
    <button
      {...props}
      className={`font-bold py-2 px-4 rounded text-sm ${buttonVariant} ${props.className}`}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
