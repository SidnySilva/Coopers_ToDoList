import styled from "styled-components";

/*Header Container*/
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  z-index: 2;
  gap: 1rem;

  .signIn {
    background-color: var(--black);
    color: var(--white);
    font-family: var(--poppins);
    font-weight: 600;
    padding: 0 1rem;
    border: none;
  }

  @media (min-width: 480px) {
    padding: 2rem;
    width: 95%;
    .signIn {
      padding: 0 2rem;
    }
  }
`;
