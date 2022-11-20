import Slider from "react-slick";
import styled from "styled-components";

const CustomSlider = styled(Slider)`
  .slick-slide {
    width: ${({ type }) =>
      type === "comingSoon" ? "540px" : "320px"}!important;
  }
`;

export { CustomSlider };
