import React from "react";
import Proptype from "prop-types";

import "./horizontalList.scss";

const HorizontalList = ({ children }) => {
  return <ul className="horizontalList">{children}</ul>;
};

HorizontalList.propType = {
  children: Proptype.element.isRequired
};

export default HorizontalList;
