import React from "react";

interface Props {}

const SectionHeadline: React.FC<Props> = ({ children }) => {
  return (
    <p className="uppercase text-sm text font-semibold first:mt-0 mt-2 mb-2">
      {children}
    </p>
  );
};

export default SectionHeadline;
