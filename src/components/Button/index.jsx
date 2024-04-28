import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  onClick,
  ...restProps
}) => {
  const handleClick =(e)=>{
    if(onClick) onClick(e);
  }
  return (
    <button className={`${className} `} {...restProps}  onClick={handleClick}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export { Button };
