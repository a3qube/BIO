import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PillToggle = ({ handleToggle }) => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <ToggleLabel toggleState={toggleState}>
      <ToggleButton
        checked={toggleState}
        onChange={({ target }) => {
          const { checked } = target;
          handleToggle(checked);
          setToggleState((prevState) => !prevState);
        }}
      />
      <ToggleSwitch toggleState={toggleState} />
    </ToggleLabel>
  );
};

const ToggleLabel = styled.label`
  display: flex;
  flex-direction: row;
  width: 30px;
  height: 15px;
  border-radius: 50px;
  padding: 1px 1px;
  justify-content: ${({ toggleState }) =>
    toggleState ? "flex-start" : "flex-end"};
  align-items: center;
  background-color: ${({ toggleState }) => (toggleState ? "#d5e8d4" : "aqua")};
  cursor: pointer;
`;
const ToggleButton = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  width: 0;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const ToggleSwitch = styled.div`
  border-radius: 50%;
  width: 50%;
  height: 100%;
  background-color: ${({ toggleState }) => (toggleState ? "aqua" : "#d5e8d4")};
`;

PillToggle.propTypes = {
  handleToggle: PropTypes.func,
};

PillToggle.defaultProps = {
  handleToggle() {},
};

export default PillToggle;
