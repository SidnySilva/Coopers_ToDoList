import bg from "../../assets/BG.png";
import room from "../../assets/02.jpg";
import { Container } from "./styles";
import { Header } from "../header";
import { useState } from "react";
import { SignManager } from "../signManager";

/* The main content at the top of the page */
export const TopContent = () => {
  const [signIn, setSignIn] =
    useState<Boolean>(false); /* useState that toggles the login popup */

  return (
    <Container>
      {signIn ? <SignManager onClick={setSignIn} /> : null}
      <Header onClick={() => setSignIn(true)} text="sign in" />
      <div className="text-contents">
        <div className="title">
          <h1 className="main-title">Organize</h1>
          <span className="subtitle">your daily jobs</span>
        </div>
        <p className="text">The only way to get things done</p>
        <button onClick={() => setSignIn(true)}>Go to To-do list</button>
      </div>
      <div className="images-contents">
        <img className="bg" src={bg} alt="background green arrow" />
        <img className="room" src={room} alt="a beauty room" />
      </div>
    </Container>
  );
};
