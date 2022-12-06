import styled from "styled-components";
import footerbg from "../../assets/footerbg.png";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  color: var(--white);
  margin-top: 5rem;
  width: 100vw;
  height: 246px;
  background-image: url(${footerbg});
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  .help,
  .email {
    font-size: 24px;
    font-weight: 600;
    line-height: 20px;
  }
  .email {
    line-height: 18px;
  }
  .rights {
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
  }
  .greenBox {
    height: 41px;
    width: 511px;
    left: 464px;
    top: 3813px;
    border-radius: 0px;
  }
`;
