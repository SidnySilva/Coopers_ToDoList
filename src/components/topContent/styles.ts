import styled, { keyframes } from "styled-components";

const bringItem = keyframes`
from{
transform: translateX(300px);
opacity:0;
}
to{
transform: translateX(0);
opacity:1;
}
`;
const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;
export const Container = styled.section`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 95%;

  .text-contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 32px;
    margin-top: 4rem;
    gap: 5rem;
    animation: ${bringItem} 1s ;
  }
  .text-contents > .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-contents > .title > .main-title {
    font-size: 60px;
    font-weight: 700;
    line-height: 64px;
  }
  .text-contents > .title > .subtitle {
    font-size: 60px;
    font-weight: 400;
    line-height: 64px;
    color: var(--light-green);
  }
  .text-contents > .text {
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
  }
  .text-contents > button {
    border: none;
    border-radius: 10px;
    background-color: var(--light-green);
    color: var(--white);
    font-size: 24px;
    font-weight: 600;
    width: 300px;
    height: 64px;
  }
  .images-contents {
    display: none;
  }

  @media (min-width: 1024px) {
    .text-contents {
      align-self: flex-start;
    }
    .text-contents > .title {
      align-items: flex-start;
    }
    .text-contents > .title > .main-title {
      font-size: 80px;
    }

    .images-contents {
      display: flex;
      width: 40vw;
    }
    .images-contents > .bg {
      position: absolute;
      right: 0;
      top: 2.5rem;
      z-index: 0;
      width: 35rem;
      animation: ${bringItem} 1s;
    }
    .images-contents > .room {
      position: absolute;
      right: 5rem;
      top: 8rem;
      width: 25rem;
      animation: ${opacity} 1s;
    }
  }
  @media (min-width: 1200px) {
    .images-contents > .bg {
      width: 40rem;
    }
    .images-contents > .room {
      width: 30rem;
    }
  }
`;
