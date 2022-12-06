import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 360px;
  height: 430px;
  border-radius: 16px;
  box-shadow: 8px 8px 24px rgba(12, 41, 208, 0.16);
  background-color: var(--white);
  overflow: hidden;
  margin-bottom: 2rem;
  .green--arrow {
    height: 56px;
    width: 49px;
    position: absolute;
    top: 40%;
    margin-left: 17rem;
  }

  .reference {
    border: 1px solid var(--good-function);
    border-radius: 16px;
    color: var(--good-function);
    align-self: flex-start;
    padding: 5px;
    margin-left: 2rem;
  }
  .description {
    width: 296px;
    font-size: 18px;
    line-height: 21.6px;
    font-weight: 500;
    color: var(--good-text);
    text-align: start;
  }
  .readMore {
    position: relative;
    align-self: start;
    justify-self: end;
    margin-left: 2rem;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: var(--light-green);
    border: none;
    background-color: var(--white);
  }
`;
