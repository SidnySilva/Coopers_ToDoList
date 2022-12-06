import { Container } from "./styles";
import goodImage1 from "../../assets/goodImage1.png";
import goodImage2 from "../../assets/goodImage2.png";
import goodImage3 from "../../assets/goodImage3.png";
import coopersIcon from "../../assets/icone-coopers.png";

/*Interface for props validation*/ 
interface goodProps {
  image: string;
  altImg: string;
  topic: string;
  text: string;
}

/* Card for good things section*/
export const GoodCard = ({ image, altImg, text, topic }: goodProps) => {
  return (
    <Container>
      <img
        src={
          image === "1" ? goodImage1 : image === "2" ? goodImage2 : goodImage3
        }
        alt={altImg}
      />
      <img className="green--arrow" src={coopersIcon} alt="" />
      <span className="reference">{topic}</span>
      <p className="description">{text}</p>
      <button className="readMore">
        read more
      </button>
    </Container>
  );
};
