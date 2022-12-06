import styled from "styled-components";
import checkGreen from "../../assets/checkGreen.png";
import checkWhite from "../../assets/checkWhite.png";

export const Container = styled.li`
  max-width: 380px;
  display: flex;
  font-size: 16px;
  line-height: 24px;
  gap: 1rem;
  transition: 0.5s;
  :active {
    position: relative;
    transform: scale(1.2) rotate(3deg);
    z-index: 3;
    border-radius: 10px;
    padding: 3px;
    cursor: grabbing;
  }
  .goal {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .goal--name {
    text-align: start;
    width: 12rem;
  }
  .goal--button {
    display: none;
    border: none;
    align-self: flex-start;
    background-color: white;
    text-align: end;
    color: var(--check-grey);
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    padding: 0;
  }
  :focus {
    .goal--name {
      color: ${(props) => props.color};
    }
  }
  :hover {
    .goal--button {
      display: block;
      cursor: pointer;
    }
    .edit--button {
      display: inline-block;
    }
  }

  /*CheckBox style*/
  .custom-checkbox > input {
    display: none;
  }
  .custom-checkbox input + label:before {
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid ${(props) => props.color};
    display: inline-block;
    vertical-align: middle;
  }
  .custom-checkbox input:checked + label:before {
    background-image: ${(props) =>
      props.color === "#4AC959" ? `url(${checkWhite})` : `url(${checkGreen})`};
    background-position: center center;
    background-repeat: no-repeat;
  }
  .custom-checkbox input:checked + label:before {
    border-color: ${(props) =>
      props.color === "#E88D39" ? `var(--check-grey)` : `none`};
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
