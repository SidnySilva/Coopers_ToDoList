import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  > img {
    display: none;
  }
  .title {
    line-height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .title > .title--title {
    font-size: 48px;
    font-weight: 700;
  }
  .title > .title--description {
    color: var(--light-green);
    font-weight: 400;
    font-size: 36px;
  }
  @media (min-width: 768px) {
    > img {
      display: flex;
      width: 231px;
      height: 231px;
    }

    .title > .title--title {
      font-size: 60px;
    }
    .title > .title--description {
      font-size: 48px;
    }
  }
`;
