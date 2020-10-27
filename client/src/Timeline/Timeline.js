import React from "react";
import PropTypes from "prop-types";
import Line from "../Components Library/Line/Line";
import Circle from "../Components Library/Circle/Circle";

import ExpediaLogo from "../resources/Expedia round.png";
import WayfairLogo from "../resources/wayfair-logo.png";
import WiproLogo from "../resources/WiproRoundLogo.png";
import styled from "styled-components";
import { getDeviceType, deviceTypes } from "../utils/deviceCheck";
import { Link } from "react-router-dom";
import "./timeline.scss";
import SmallBox from "./SmallBox";

const logoList = {
  wayfair: WayfairLogo,
  expedia: ExpediaLogo,
  wipro: WiproLogo,
};
const companyInitial = {
  wayfair: "W",
  expedia: "E",
  wipro: "W",
};

const getRandomColor = () => {
  const randomNum = Math.floor(Math.random() * Math.floor(4));
  console.log("random num = ", randomNum);
  const colors = ["#ff0000", "#00ff40", "#0040ff", "#8000ff"];
  return colors[randomNum];
};

export const companies = Object.keys(logoList).reduce((acc, companyName) => {
  acc[companyName] = companyName;
  return acc;
}, {});

const TimeLine = ({
  className,
  previousCompany,
  currentCompany,
  nextCompany,
  timeSpan,
  nextEmpIndex,
  prevEmpIndex,
  handleOtherEmployerClick,
}) => {
  const isSmallScreen = getDeviceType() <= deviceTypes.TABLET;

  return (
    <TimeLineStyled>
      {previousCompany && (
        <React.Fragment>
          <Link
            to={`/${prevEmpIndex}`}
            style={{ textDecoration: "none", outline: 0 }}
          >
            <SmallBox as="button" isTop>
              . . .
            </SmallBox>
          </Link>
          <Line className="timeLine-connector--secondary" />
        </React.Fragment>
      )}
      <Circle size={106} mSize={50} shade={getRandomColor()}>
        {companyInitial[currentCompany]}
      </Circle>
      <Line
        className="timeLine-connector--primary"
        text={timeSpan}
        isHorizontal={isSmallScreen}
      />
      {nextCompany && (
        <React.Fragment>
          <Link
            to={`/${nextEmpIndex}`}
            style={{ textDecoration: "none", outline: 0, cursor: "s-resize" }}
          >
            <SmallBox as="button">. . .</SmallBox>
          </Link>
          <Line className="timeLine-connector--secondary" />{" "}
        </React.Fragment>
      )}
    </TimeLineStyled>
  );
};

const TimeLineStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 98%;
  padding: 10% 0;
  color: ${({ theme }) => theme.colors.lineColor};
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

TimeLine.prototype = {
  className: PropTypes.string,
  timeSpan: PropTypes.string,
  nextCompany: PropTypes.stirng,
  previousCompany: PropTypes.stirng,
  currentCompany: PropTypes.stirng,
};

TimeLine.defaultProps = {
  className: "",
  nextCompany: "",
  timeSpan: "",
  previousCompany: "",
  currentCompany: "",
};

export default TimeLine;
