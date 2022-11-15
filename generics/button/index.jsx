import React from "react";
import Image from "next/image";
import play from "../../public/icons/play.svg";
import { Buttons, ImageWrapper, Wrapper } from "./style";

const Button = ({ children, type }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image width={20} height={20} src={play} alt="" />
      </ImageWrapper>
      <Buttons type={type}>{children}</Buttons>
    </Wrapper>
  );
};

export default Button;
