import styled from "styled-components";

/*Box that contains all elements about sign up*/
export const Box = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 55rem;
  padding-bottom: 2rem;
  position: absolute;
  z-index: 4;
  top: 117px;
  right: 254px;
  .header {
    display: flex;
  }
  .header > img {
    width: 231px;
    height: 231px;
  }
  .header > .title {
    line-height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .header > .title > .title--title {
    font-size: 60px;
    font-weight: 700;
  }
  .header > .title > .title--description {
    color: var(--light-green);
    font-weight: 400;
    font-size: 48px;
  }
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
    background-color:var(--white);
    margin: 0 1rem;
    height: 48px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

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
  .form--register{
    color: var(--light-green);
    font-size: 24px;
    font-weight: 400;
    align-self: center;
    border: none;
    background-color: var(--white);
  }
`;
