import signIn from "../../assets/signIn.png";
import { Container } from "./styles";

/*Interface for top content props */
interface IProps {
  title: string;
  subtitle: string;
}

/* Container with the title and image from login and register component */
export const SignTopContent = ({ title, subtitle }: IProps) => {
  return (
    <Container>
      <img src={signIn} alt="Pessoa apontando para o site" />
      <div className="title">
        <h1 className="title--title">{title}</h1>
        <p className="title--description">{subtitle}</p>
      </div>
    </Container>
  );
};
