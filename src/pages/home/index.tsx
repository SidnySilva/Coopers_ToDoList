import { Footer } from "../../components/footer";
import { GetInTouch } from "../../components/getInTouch";
import { Goodthings } from "../../components/goodThings";
import { TodoDescription } from "../../components/todo-description";
import { TopContent } from "../../components/topContent";
import { Container } from "./styles";

/*Main page with all sections */
export const Home = () => {
  return (
    <Container>
      <TopContent />
      <TodoDescription />
      <Goodthings />
      <GetInTouch />
      <Footer />
    </Container>
  );
};
