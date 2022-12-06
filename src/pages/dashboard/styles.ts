import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  overflow-x: hidden;
  > .list--container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    max-width: 95%;
    overflow-x: scroll;
    padding: 10px;
  }

  @media (min-width: 1200px) {
    justify-content: center;
    align-items: center;

    > .list--container {
      align-items: center;
      justify-content: center;
      gap: 3rem;
      overflow-x: hidden;
    }
  }
`;
