import { Dispatch, useState } from "react";
import { SignIn } from "../signIn";
import { Register } from "../register";
import { Popup } from "../popup";
import { Container } from "./styles";

interface Istate {
  onClick: Dispatch<React.SetStateAction<Boolean>>;
}

/* Box responsable to toogle between register and login components */
export const SignManager = ({ onClick }: Istate) => {
  const [register, setRegister] = useState<boolean>(false);

  return (
    <Container>
      <Popup onClick={() => onClick(false)}>
        {!register ? (
          <SignIn onClick={() => setRegister(true)} />
        ) : (
          <Register onClick={() => setRegister(false)} />
        )}
      </Popup>
    </Container>
  );
};
