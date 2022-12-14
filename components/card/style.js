import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px;
  position: relative;
  max-width: ${({ type }) => (type === "comingSoon" ? "516px" : "283px")};
  height: ${({ type }) => (type === "comingSoon" ? "290px" : "474px")};
  width: 100%;
  transition: all 0.2s ease-in;
  cursor: pointer;
  overflow: hidden;
  margin-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

const Wrapper = styled.div`
  transition: all 0.1s ease;

  .img {
    transition: all 0.2s ease;
    border-radius: 8px;
  }
  :hover {
    .img {
      transform: scale(1.03);
    }
  }
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  border-radius: 3px;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: -200px 22px 106px -19px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: -400px 22px 106px -19px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: -200px 22px 106px -19px rgba(0, 0, 0, 1) inset;
`;

const Title = styled.h2`
  font-size: 38px;
  line-height: 44px;
  font-weight: 900;
  color: white;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  line-height: 28px;
  font-weight: 900;
  color: white;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const Status = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: white;
  border-radius: 9998px;
  padding: 0 ${({ type }) => (type === "comingSoon" ? "30px" : "12px")};
  font-size: 14px;
  z-index: 99999;
`;

// styles for comingSoon component

const ContentForComingSoon = styled.div`
  position: absolute;
  bottom: 0;
  left: 20px;
  z-index: 99999;
`;

const ComingSoonTitle = styled.h3`
  font-weight: 600;
  line-height: 1.25;
  font-size: 24px;
  color: #fff;
  margin-bottom: 5px;
`;

const ComingSoonSubTitle = styled.p`
  font-weight: 600;
  line-height: 1.25;
  color: #fff;
`;

const ComingSoonBlur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

export {
  Container,
  Status,
  Title,
  Content,
  Subtitle,
  Wrapper,
  Blur,
  ContentForComingSoon,
  ComingSoonTitle,
  ComingSoonSubTitle,
  ComingSoonBlur,
};
