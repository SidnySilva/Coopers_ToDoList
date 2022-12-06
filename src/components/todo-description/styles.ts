import styled from "styled-components";
import blackBox from "../../assets/blackBox.png";

export const SectionTitle = styled.section`
  height: 300px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;

  background-image: url(${blackBox});
  background-repeat: no-repeat;
  background-position: center;
  background-size: center;

  .title {
    font-size: 40px;
    font-weight: 600;
    font-family: var(--poppins);
    line-height: 60px;
    text-decoration: underline var(--light-green);
  }
  .text {
    align-self: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 29.26px;
    text-align: center;
    text-size-adjust: 80%;
    width: 80%;
  }
  @media (min-width: 480px) {
    width: 100vw;
    height: 420px;
    background-size: 100vw 44vh;
    .title {
      font-size: 60px;
    }
    .text {
      font-size: 24px;
      width: 40rem;
    }
  }

  @media (min-width: 1200px) {
    margin-top: 8rem;
  }
`;


export const SectionExamples = styled.section`
  .triangle1,
  .triangle2 {
    display: none;
  }
  
  .plan {
    width: 90%;
  }
  @media (min-width: 480px) {
    width: 100vw;
    color: var(--white);

    background-size: 100vw 44vh;
    .title {
      font-size: 60px;
    }
    .text {
      font-size: 24px;
      width: 40rem;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .triangle1,
    .triangle2 {
      display: flex;
      position: absolute;
      z-index: -1;
      left: 0;
    }

    .plan {
      width: 801px;
    }
  }

`;
