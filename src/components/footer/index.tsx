import greenBar from "../../assets/greenBar.png";
import { Container } from "./styles";

/*Footer content */
export const Footer = () => {
  return (
    <Container>
      <h4 className="help">Need help?</h4>
      <h5 className="email">coopers@coopers.pro</h5>
      <p className="rights">© 2021 Coopers. All rights reserved.</p>
      <img src={greenBar} alt="green bar" />
    </Container>
  );
};
