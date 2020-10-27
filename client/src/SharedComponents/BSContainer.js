import React from "react";

const BSContainer = ({ children, className, ...otherProps }) => (
  <div className={`container-fluid ${className}`} {...otherProps}>
    {children}
  </div>
);
export default BSContainer;
