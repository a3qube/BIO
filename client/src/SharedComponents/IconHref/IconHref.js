import React from "react";
import { FontAwesomeIcon, IconProp } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./iconHref.scss";

const displayElement = (showOnMobile, isMobile) => {
  if (isMobile) {
    return showOnMobile;
  }
  return true;
};

const IconHref = ({ icon, url, text, showOnMobile, isMobile }) => {
  return displayElement(showOnMobile, isMobile) ? (
    <li>
      <a href={url} className="iconHref">
        <div className="iconHref-icon">
          <FontAwesomeIcon icon={icon} pull="left" size="lg" />
        </div>
        {text && <div className="iconHref-text">{text}</div>}
      </a>
    </li>
  ) : null;
};

IconHref.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string,
  text: PropTypes.string,
  showOnMobile: PropTypes.bool,
  isMobile: PropTypes.bool
};

IconHref.defaultProps = {
  url: "#",
  text: "",
  showOnMobile: false,
  isMobile: false
};

export default IconHref;
