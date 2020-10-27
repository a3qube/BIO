import React from "react";
import FlexBox, {
  FlexBoxValueHelper,
} from "../Components Library/Flexbox/FlexBox";
import styled from "styled-components";
import SkillsProgress from "../Components Library/SkillsProgress/SkillsProgress";

const SkillsCapsule = ({ skillsSet }) => {
  return (
    <SkillsCapsuleStyled direction={FlexBoxValueHelper.DIRECTION_ROW}>
      {skillsSet.map((skillDetails) => (
        <SkillsProgress {...skillDetails} key={skillDetails.text} />
      ))}
    </SkillsCapsuleStyled>
  );
};

const SkillsCapsuleStyled = styled(FlexBox)`
  border-radius: 100px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.footer.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100px;
  box-shadow: 0px 0px 14px 1px ${({ theme }) => theme.colors.footer.shadowColor};
`;

export default SkillsCapsule;
