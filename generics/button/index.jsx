import React from "react";
import Image from "next/image";
import play from "../../public/icons/play.svg";
import { Buttons, ImageWrapper } from "./style";
import Link from "next/link";

const Button = ({ children, type, link }) => {
  return (
    <Link className="relative" href={link || "#"}>
      <ImageWrapper>
        <Image width={20} height={20} src={play} alt="" />
      </ImageWrapper>
      <Buttons type={type}>{children}</Buttons>
    </Link>
  );
};

export default Button;
