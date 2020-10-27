import React from "react";
import FlexBox, {
  FlexBoxValueHelper,
} from "../Components Library/Flexbox/FlexBox";
import Line from "../Components Library/Line/Line";
import wayfairLongLogo from "../resources/wayfair-logo-long.png";
import expediaLongLogo from "../resources/Expedia.png";
import wiproLogo from "../resources/WiproRoundLogo.png";
import "./experience.scss";
import ExperienceCapsule from "../ExprienceCapsule/ExperienceCapsule";
import styled from "styled-components";

const headerLogoMap = {
  wayfair: wayfairLongLogo,
  expedia: expediaLongLogo,
  wipro: wiproLogo,
};

const Experience = ({ title, details, currentEmpId }) => {
  return (
    <FlexBox className="experience">
      <FlexBox className="experience-header">
        <ExperienceContainerStyled direction={FlexBoxValueHelper.DIRECTION_ROW}>
          <h2>{title}</h2>
        </ExperienceContainerStyled>
        <Line isHorizontal />
      </FlexBox>
      <FlexBox className="experience-details">
        {details.map(({ role, responsibilities }) => (
          <ExperienceCapsule role={role} achievements={responsibilities} />
        ))}
      </FlexBox>
    </FlexBox>
  );
};

const ExperienceContainerStyled = styled(FlexBox)`
  justify-content: space-between;
  align-items: flex-end;
  line-height: 2;
  color: ${({ theme }) => theme.colors.experience.titleFont};
`;

export default Experience;
