import Image from "next/image";
import React, { Fragment } from "react";
import photo from "../../public/photos/cardBg.webp";
import {
  ComingSoonBlur,
  ComingSoonTitle,
  Container,
  Content,
  ContentForComingSoon,
  Status,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const Card = ({ value, type, comingSoonImg }) => {
  return (
    <Fragment>
      <Container type={type} key={value?.id}>
        <Wrapper>
          <Status type={type}>{value?.status || "New"}</Status>
          {type !== "comingSoon" ? (
            <>
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
            </>
          ) : (
            <div>
              <ComingSoonBlur />
              <Image
                src={
                  comingSoonImg ||
                  "https://www.masterclass.com/course-images/attachments/sjiytn0p38hi9w4gcah272emt6k4?width=1920&quality=75&format=webp"
                }
                width={516}
                height={290}
                alt="coming soon"
              />
              <ContentForComingSoon>
                <ComingSoonTitle>Mindy Weiss</ComingSoonTitle>
                <p>Plan Your Dream Wedding</p>
              </ContentForComingSoon>
            </div>
          )}
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Card;
