import React from "react";

const Button = ({ styles = "", text, icon }) => {
  return (
    <button
      type="button"
      aria-label={text}
      className={`flex items-center justify-center gap-2 py-3 px-4 bg-blue-gradient font-poppins font-medium text-[12px] text-primary outline-none rounded ${styles}`}
    >
      {icon && React.createElement(icon)}
      <span>{text}</span>
    </button>
  );
};

export default Button;
