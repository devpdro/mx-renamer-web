import React from "react";

interface WrapperProps {
  content: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ content }) => {
  return <section>{content}</section>;
};

export default Wrapper;
