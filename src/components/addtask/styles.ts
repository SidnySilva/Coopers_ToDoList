import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 2rem;
  font-size: 24px;
  .task_title {
    font-weight: 700;
    font-size: 32px;
  }
  button {
    background-color: var(--light-green);
    color: var(--white);
    padding: 1rem;
    font-weight: 700;
    border-radius: 10px;
    font-size: 24px;
    border: none;
    align-self: center;
  }
`;
