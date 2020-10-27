import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "./skillsProgress.scss";

const SkillsProgress = ({ percent, text, color }) => {
  return (
    <div className="skillsProgress">
      <CircularProgressbar
        value={percent}
        text={text}
        circleRatio={0.75}
        styles={buildStyles({
          textColor: color,
          pathColor: color,
          trailColor: "#0808084a",
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: "butt",
        })}
      />
    </div>
  );
};

SkillsProgress.propTypes = {
  percent: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
};
SkillsProgress.defaultProps = {
  percent: 100,
  text: "Default",
  color: "gold",
};

export default SkillsProgress;
