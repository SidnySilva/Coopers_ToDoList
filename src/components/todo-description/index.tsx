import { SectionExamples, SectionTitle } from "./styles";
import bg1 from "../../assets/Group 3.png";
import bg2 from "../../assets/Group 6.png";
import planos from "../../assets/Planos.png";

/*Container with description and examples about the to do list */
export const TodoDescription = () => {
  return (
    <>
      <SectionTitle>
        <h2 className="title">To-do List</h2>
        <p className="text">
          Drag and drop to set your main priorities, check when done and create
          what´s new.
        </p>
      </SectionTitle>
      <SectionExamples>
        <img className="triangle1" src={bg1} alt="a green triangle" />
        <img className="triangle2" src={bg2} alt="a smaller green triangle" />
        <img className="plan" src={planos} alt="To do and done tables" />
      </SectionExamples>
    </>
  );
};
