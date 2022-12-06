import styled, { keyframes } from "styled-components";

const animate = keyframes`
from{
  opacity: 0;
}
to{
 opacity: 0.9;
}
`;

const animate2 = keyframes`
0%{
  transform:scale(0)
}
50%{
  transform:scale(1.5)

}
100%{
  transform:scale(1)

}
`;
export const Container = styled.section`
  width: 110vw;
  height: 200%;
  background-color: black;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  animation: ${animate} 1s;
`;

/*Box that contains all elements about sign in*/
export const Box = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  align-self: center;
  align-items: center;
  box-sizing: border-box;
  width: 95%;
  padding-bottom: 2rem;
  position: absolute;
  z-index: 4;
  animation: ${animate2} 0.5s;
  margin-top: calc(50vh/2);
  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .close > .close--button {
    font-size: 20px;
    font-weight: 700;
    border: none;
    background-color: var(--white);
    margin: 0 1rem;
    height: 48px;
  }

  @media (min-width: 768px) {
    width: 55rem;
    margin-top: 0;
  }
`;
