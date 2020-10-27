import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ shade }) => shade};
  border-color: ${({ shade }) => shade};
  border-style: solid;
  @media (min-width: 768px) {
    height: ${({ size }) => `${size}px`};
    width: ${({ size }) => `${size}px`};
    font-size: 3em;
  }
  height: ${({ mSize }) => `${mSize}px`};
  width: ${({ mSize }) => `${mSize}px`};
  transition: box-shadow 0.5s ease-out;
  padding: 0;
  background-color: inherit;
  font-size: 2em;
`;

export const CircleImage = styled.img.attrs(({ src, alt }) => ({
  height: "100%",
  width: "100%",
  src: src,
  alt: alt,
}))`
  opacity: 0.4;
  border-radius: inherit;
  transition: opacity 0.5s, height 0.5s, width 0.5s ease-out;
  &:hover {
    opacity: 1;
    box-shadow: 2px 8px 20px 0px black;
    height: 103%;
    width: 103%;
    z-index: 100;
  }
`;

Circle.prototype = {
  className: PropTypes.string,
  size: PropTypes.number,
  mSize: PropTypes.number,
  shade: PropTypes.string,
  children: React.children,
};

Circle.defaultProps = {
  className: "",
  size: 100,
  mSize: 50,
  children: null,
  shade: "cyan",
};

export default Circle;
