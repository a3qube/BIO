import styled from "styled-components";

const SmallBox = styled.div`
  border-radius: 10%;
  text-decoration: none;
  background-color: inherit;
  height: 20px;
  width: 30px;
  font-size: 0.6em;
  cursor: ${({ isTop }) => (isTop ? "n-resize" : "s-resize")};
  @media (min-width: 768px) {
    height: 30px;
    width: 50px;
    font-weight: 900;
    box-shadow: 2px 3px 2px 1px black;
  }
`;

export default SmallBox;
