import * as yup from "yup";
import { Form } from "./styles";
import { Input } from "../input";
import { Dispatch } from "react";
import { useUser } from "../../context/authProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignTopContent } from "../signTopContent";

/*Interface for useState validation as register props */
interface Istate {
  onClick: Dispatch<React.SetStateAction<Boolean>>;
}

/*Interface for useForm schema validation */
interface signInCredentials {
  email: string;
  password: string;
}

/* Responsable for login */
export const SignIn = ({ onClick }: Istate) => {
  const { signIn } = useUser();

  const formSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: signInCredentials) => {
    signIn(data);
  };
  return (
    <>
      <SignTopContent title="Sign in" subtitle="to access your list" />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="User:"
          type="text"
          register={{ ...register("email") }}
          error={
            errors.email?.message && (
              <span className="error">{errors.email?.message}</span>
            )
          }
        />

        <Input
          name="Password:"
          type="password"
          register={{ ...register("password") }}
          error={
            errors.password?.message && (
              <span className="error">{errors.password?.message}</span>
            )
          }
        />

        {/*Login button */}
        <button type="submit" className="form--signIn">
          Sign in
        </button>
        {/*toggle to register component */}
        <button
          type="button"
          className="form--register"
          onClick={() => onClick(true)}
        >
          Register
        </button>
      </Form>
    </>
  );
};
