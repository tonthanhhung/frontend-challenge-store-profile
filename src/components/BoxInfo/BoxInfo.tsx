import React from "react";

interface Props {
  className?: string;
}

const BoxInfo: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={"border rounded px-4 py-6 bg-white flex flex-col " + className}
    >
      {children}
    </div>
  );
};

export default BoxInfo;
