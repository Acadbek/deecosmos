import styled from "styled-components";

const Container = styled.div`
  background: red;
  border-radius: 1rem;
  position: relative;
  max-width: 283px;
  /* 516 290 283px */
  height: 474px;
  width: 100%;
  transition: all 0.2s ease-in;
  cursor: pointer;
  overflow: hidden;
  background-color: black;
  margin-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

const Wrapper = styled.div`
  transition: all 0.1s ease;
  opacity: 0.8;

  .img {
    transition: all 0.2s ease;
    border-radius: 1rem;
  }
  :hover {
    opacity: 1;
    .img {
      transform: scale(1.05);
    }
  }
`;

// const Blur = styled.div`
//   position: absolute;
//   transition: all 0.2s ease-in;
//   top: 0;
//   border-radius: 3px;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   :hover {
//     background-color: transparent;
//   }
// `;

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
  border-radius: 9999px;
  padding: 0 12px;
  font-size: 14px;
  z-index: 999;
`;

export { Container, Status, Title, Content, Subtitle, Wrapper };
