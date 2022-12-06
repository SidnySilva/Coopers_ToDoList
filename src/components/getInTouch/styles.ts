import styled from "styled-components";

export const Container = styled.section`
  width: 90vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 8rem 0 0 2rem;
  .tatiana-image {
    display: none;
  }
  .greenBar {
    display: none;
  }
  .getInTouch--box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
    width: 95%;
    height: 700px;
    color: var(--getIn-text);
    box-sizing: border-box;

    .title {
      display: flex;
      gap: 1rem;
      align-self: center;
      margin-bottom: 4rem;
    }

    .title > img {
      padding: 1rem;
      height: 30px;
      width: 30px;
      border-radius: 5px;
    }

    .title > h3 {
      font-size: 24px;
      font-weight: 500;
      line-height: 29.26px;
      text-align: left;
      b {
        font-weight: 700;
      }
    }
    .envelop {
      background-color: var(--light-green);
    }
  }
  @media (min-width: 768px) {
    width: 100vw;
    margin: 0;
    .tatiana-image {
      display: flex;
      border-radius: 50%;
      position: relative;
      top: 270px;
    }
    .greenBar {
      display: flex;
      background-color: var(--light-green);
      position: relative;
      height: 23px;
      width: 166px;
      top: 170px;
      left: -81px;
      z-index: -1;
    }
    .getInTouch--box {
      width: 700px;
      margin-top: 10rem;

      .title {
        align-self: flex-start;
        margin-left: 60px;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;

  > .center {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    div {
      width: 100%;

      > div {
        width: 100%;
      }
    }
    #email,
    #telephone {
      font-size: 16px;
    }
  }

  #username {
    width: 100%;
    font-size: 16px;
  }

  #message {
    width: 100%;
    height: 150px;
    font-size: 16px;
  }
  button {
    background-color: var(--light-green);
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
    line-height: 19.5px;
    text-align: center;
    border: none;
    border-radius: 5px;
    width: 90%;
    height: 52px;
    padding: 0;
  }

  .message--box > textarea {
    border-radius: 4px;
    font-family: var(--montserrat);
    font-size: 16px;
    resize: none;
    padding: 0;
    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
  @media (min-width: 768px) {
    > .center {
      flex-direction: row;
      gap: 0;
      div {
        width: 48%;
      }
    }
  }

`;
