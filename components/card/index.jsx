import Image from "next/image";
import React, { Fragment } from "react";
import photo from "../../public/photos/cardBg.webp";
import { Container, Content, Status, Subtitle, Title, Wrapper } from "./style";

const Card = ({ value }, type) => {
  return (
    <Fragment>
      <Container type={type} key={value?.id}>
        <Wrapper>
          <Status>{value?.status || "New"}</Status>
          <Image
            className="img"
            width={283}
            height={474}
            src={value?.img || photo}
            alt="Author"
          />
          <Content>
            <Title>{value?.title || "Devon Rodrigues"}</Title>
            <div className="w-[40px] mb-9 h-[4px] bg-white"></div>
            <Subtitle>{value?.subtitle || "Draw and Paint"}</Subtitle>
          </Content>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Card;
