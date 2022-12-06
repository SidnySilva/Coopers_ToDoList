import { Container } from "./styles";
import { CarouselBox } from "./carousel";

/*Good things section */
export const Goodthings = () => {
  return (
    <Container>
      <div className="goodThings--box">
        <h2 className="goodThings--title">good things</h2>
        <ul className="goodThings--cards">
          <CarouselBox />
        </ul>
      </div>
    </Container>
  );
};
