import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .goodThings--box {
    background-color: var(--light-green);
    height: 520px;
    width: 90%;
    border-radius: 10px;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    gap: 3rem;
  }

  .goodThings--title {
    font-size: 36px;
    font-weight: 700;
    line-height: 53px;
    color: var(--white);
    position: relative;
    top: 4rem;
  }
  .goodThings--cards {
    display: flex;
    gap: 2rem;
    position: relative;
    top: 4rem;
  }

  .carousel > .carousel--button {
    height: 29px;
    border-radius: 50%;
    border: none;
    background-color: var(--carousel-grey);
    margin: 0 1rem;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .rec-slider-container > .rec-slider > .rec-swipable {
    display: flex;
    gap: 15px;
  }
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px var(--carousel-grey);
  }

  .rec-pagination > button {
    height: 29px;
    width: 29px;
    border-radius: 50%;
    border: none;
    background-color: var(--carousel-grey);
    display: none;
  }
  .rec-pagination > .rec-dot_active {
    background-color: var(--light-green);
    box-shadow: none;
  }
  .rec-arrow-right,
  .rec-arrow-left {
    display: none;
  }
  @media (min-width: 768px) {
    .goodThings--box {
      padding-left: 4rem;
    }

    .goodThings--title {
      font-size: 48px;
    }
    .rec-pagination {
      box-sizing: border-box;
      position: absolute;
      width: 100vw;
      bottom: -5rem;
      left: 28rem;
    }
    .rec-pagination > button {
      display: flex;
      align-self: center;
    }
  }
  @media (min-width: 1200px) {
    .goodThings--box {
      width: 1080px;
    }
    .rec-slider-container > .rec-slider > .rec-swipable {
      gap: 0;
    }
  }
`;
