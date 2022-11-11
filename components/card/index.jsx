import Image from "next/image";
import React, { Fragment } from "react";
import photo from "../../public/photos/cardBg.webp";
import { Container, Content, Status, Subtitle, Title, Wrapper } from "./style";



const Card = ({value}) => {
  return (
    <Fragment>
        <Container key={value?.id}>
          <Wrapper>
            <Status>{value?.status}</Status>
            <Image
              className="img"
              width={283}
              height={474}
              src={value?.img}
              alt="Author"
            />
            <Content>
              <Title>{value?.title}</Title>
              <div className="w-[40px] mb-9 h-[4px] bg-white"></div>
              <Subtitle>
                {value?.subtitle}
              </Subtitle>
            </Content>
          </Wrapper>
        </Container>
    </Fragment>
  );
};

export default Card;
