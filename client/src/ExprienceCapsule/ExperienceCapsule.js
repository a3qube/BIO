import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../Components Library/Flexbox/FlexBox";
import Line from "../Components Library/Line/Line";
import styled from "styled-components";

import "./experienceCapsule.scss";

const ExperienceCapsule = ({ role, achievements }) => {
  return (
    <ExperienceCapsuleStyled>
      <h3 className="experienceDetails-role">{role}</h3>
      <Line isHorizontal></Line>
      <ul className="experienceDetails-achievements">
        {achievements.map((achievement) => (
          <li>{achievement}</li>
        ))}
      </ul>
    </ExperienceCapsuleStyled>
  );
};

const ExperienceCapsuleStyled = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.experience.bgColor};
  color: ${({ theme }) => theme.colors.experience.font};

  flex-grow: 1;
  height: 45%;
  @media (min-width: 768px) {
    padding: 10px 42px;
    margin: 5px 20px;
    box-shadow: 3px 3px 10px 0px
      ${({ theme }) => theme.colors.experience.shadowColor};
    border-radius: 55px;
  }
`;

ExperienceCapsule.propTypes = {
  role: PropTypes.string,
  achievements: PropTypes.arrayOf(PropTypes.string),
};
export default ExperienceCapsule;
