import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "black":
      return {
        background: "transparent",
        border: "solid white 1px",
        color: "white",
      };
    case "red":
      return {
        background: "#e32652",
        color: "white",
      };
    case "gray":
      return {
        background: "#43454c",
        color: "white",
      };
    case "transparent":
      return {
        background: "transparent",
        color: "white",
      };
    default:
      return {
        background: "#e32652",
        color: "blue",
      };
  }
};

const Buttons = styled.button`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  padding-top: ${({ paddingX }) => `${paddingX}px`};
  padding-bottom: ${({ paddingX }) => `${paddingX}px`};
  padding-left: ${({ icon }) => (icon ? "45px" : "30px")};
  padding-right: 27px;
  border-radius: 8px;
  transition: background 0.26s ease, box-shadow 0.25s ease;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid white;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
  background-color: transparent;
  ${getType}
  :hover {
    background-color: #333;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
`;

export { Buttons, ImageWrapper };
