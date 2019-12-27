import React from "react";

interface Props {
  className?: string;
}

const Label: React.FC<Props> = ({ className, children }) => {
  return (
    <span className={"text-gray-500 text-sm " + className}>{children}</span>
  );
};

export default Label;
