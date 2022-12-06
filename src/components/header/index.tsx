import { Container } from "./styles";
import logo from "../../assets/Logo.png";

/*Header props validation */
interface props {
  text: string;
  onClick: () => void;
}

/*Header Component */
export const Header = ({ text, onClick }: props) => {
  return (
    <Container>
      <img className="logo" src={logo} alt="Coopers logo" />
      <button className="signIn" onClick={() => onClick()}>
        {text}
      </button>
    </Container>
  );
};
