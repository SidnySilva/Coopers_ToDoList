import styled from "styled-components";

export const ListContainer = styled.div`
  border-top: 20px solid ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 2rem;
  width: 390px;
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);

  .add_task {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: ${(props) => props.color};
    border: 2px solid ${(props) => props.color};
    background-color: var(--white);
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
    max-height: 40vh;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 6px; /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: none; /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.color}; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  }
  .title {
    font-family: var(--poppins);
    font-weight: 600;
    font-size: 40px;
    line-height: 24px;
    text-align: center;
    margin: 2rem 0;
  }
  .text,
  .done-subtext,
  .to-do-subtext {
    font-weight: 400;
    font-size: 24px;
    line-height: 29.26px;
    text-align: center;
  }
  .done-subtext {
    font-weight: 700;
  }
  .erase--button {
    border: none;
    background-color: var(--black);
    color: var(--white);
    border-radius: 10px;
    width: 300px;
    height: 64px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 29.26px;
    align-self: center;
  }

  @media (min-width: 1024px) {
    .add_task {
      display: none;
    }
    :hover {
      .add_task {
      display: flex;
    };
    }
  }
`;
