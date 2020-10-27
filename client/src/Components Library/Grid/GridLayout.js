import PropTypes from "prop-types";
import styled from "styled-components";

const GridLayout = styled.div`
  display: grid;
  height: 100%;
`;

GridLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

GridLayout.defaultProps = {
  className: "",
};

export default GridLayout;
