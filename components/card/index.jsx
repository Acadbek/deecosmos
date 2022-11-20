import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import photo from "../../public/photos/cardBg.webp";
import {
  ComingSoonBlur,
  ComingSoonSubTitle,
  ComingSoonTitle,
  Container,
  Content,
  ContentForComingSoon,
  Status,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const Card = ({
  dataForComingSoon,
  data,
  type,
  comingSoonImg,
  comingSoonLink,
  link,
}) => {
  // console.log(dataForComingSoon, "comingSoon");
  return (
    <Fragment>
      <Container type={type} key={data?.id}>
        <Wrapper>
          <Status type={type}>{data?.status || "New"}</Status>
          {type === "comingSoon" ? (
            <Link href={comingSoonLink || "#"}>
              <ComingSoonBlur />
              <Image
                className="img"
                src={
                  // dataForComingSoon?.img ||
                  "https://www.masterclass.com/course-images/attachments/sjiytn0p38hi9w4gcah272emt6k4?width=1920&quality=75&format=webp"
                }
                width={516}
                height={290}
                alt="Coming soon photo"
              />
              <ContentForComingSoon>
                <ComingSoonTitle>{dataForComingSoon?.name}</ComingSoonTitle>
                <ComingSoonSubTitle>
                  {dataForComingSoon?.subTitle}
                </ComingSoonSubTitle>
              </ContentForComingSoon>
            </Link>
          ) : (
            <Link href={link || "#"}>
              <Image
                className="img"
                width={283}
                height={474}
                src={data?.img || photo}
                alt="Author"
              />
              <Content>
                <Title>{data?.title || "Devon Rodriguez"}</Title>
                <div className="w-[40px] mb-9 h-[4px] bg-white"></div>
                <Subtitle>{data?.subtitle || "Draw and Paint"}</Subtitle>
              </Content>
            </Link>
          )}
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Card;
