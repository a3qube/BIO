import React from "react";
import "./tech.scss";

export default ({ size, tech, id }) => {
  return (
    <div key={`${id}-li`} className="techLi" style={{ fontSize: size + "px" }}>
      {tech}
    </div>
  );
};
