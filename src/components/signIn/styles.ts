import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  .form--input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .form--input > input {
    width: 19rem;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid var(--input-grey);
    font-size: 24px;
    padding: 0 1rem;
  }

  span,
  button {
    font-weight: 600;
    font-size: 24px;
  }
  .form--signIn {
    align-self: center;
    background-color: var(--light-green);
    border: none;
    color: var(--white);
    width: 300px;
    height: 64px;
  }
  .form--register {
    color: var(--light-green);
    font-size: 24px;
    font-weight: 400;
    align-self: center;
    border: none;
    background-color: var(--white);
  }
`;
