import React from "react";

interface Props {}

const SectionHeadline: React.FC<Props> = ({ children }) => {
  return (
    <p className="uppercase text-sm text font-semibold mb-3">{children}</p>
  );
};

export default SectionHeadline;
