import React from "react";

interface Props {}

const HeaderMenuItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="mainIcon border-l flex flex-1 items-center justify-center p-2 sm:p-4 cursor-pointer">
      {children}
    </div>
  );
};

export default HeaderMenuItem;
