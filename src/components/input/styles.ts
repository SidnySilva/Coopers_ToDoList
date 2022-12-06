import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div {
    width: 100%;
    border: 1px solid var(--input-grey);
    color: var(--input-grey);
    height: 50px;
    display: flex;
    border-radius: 4px;
  }
  > div > input {
    width: 100%;
    border-radius: 10px;
    margin-left: 10px;
    font-size: 24px;
    border: none;
    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
  .error {
    color: red;
    width: 19rem;
    font-size: 10px;
  }
`;
