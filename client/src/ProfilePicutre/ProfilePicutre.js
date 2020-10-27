import React from "react";
import PropTypes from "prop-types";
import proPic from "../resources/ProPic.jpg";
import styled from "styled-components";

import "./profilePicture.scss";

const ProfilePicture = ({ shift_left, shift_top, size }) => {
  return (
    <ProfileImage
      src={proPic}
      alt="profile"
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

const ProfileImage = styled.img`
  border-radius: 100%;
  box-shadow: 2px 2px 13px 0px ${({ theme }) =>
    theme.colors.header.dpShadowColor}};
  position: absolute;
  right: 10%;
  bottom: 0%;
`;

ProfilePicture.propType = {
  shift_top: PropTypes.number,
  shift_left: PropTypes.number,
  size: PropTypes.number,
};

ProfilePicture.defaultProps = {
  shift_top: 10,
  shift_left: 10,
  size: 100,
};

export default ProfilePicture;
