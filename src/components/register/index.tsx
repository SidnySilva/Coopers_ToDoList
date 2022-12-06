import * as yup from "yup";
import { Form } from "./styles";
import { Dispatch } from "react";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../context/authProvider";
import { SignTopContent } from "../signTopContent";

/*Interface for useState validation as register props */
interface Istate {
  onClick: Dispatch<React.SetStateAction<Boolean>>;
}

/*Interface for useForm schema validation */
interface registerCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/* Responsable for user account creation */
export const Register = ({ onClick }: Istate) => {
  const { createUser } = useUser();
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is necessary")
      .matches(
        /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
        "Username: Minimun 3 characters, Can`t user special caracters."
      ),
    email: yup
      .string()
      .email("type a valid e-mail, ex: user@email.com.")
      .required("Email is necessary."),
    password: yup
      .string()
      .required("Password is necessary")
      .matches(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
        "Password: Minimun 8 characters;At least a number;At least an uppercase letter;At least a lowercase letter;A special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Different passwords")
      .required("You need to confirm your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: registerCredentials) => {
    createUser(data);
  };

  return (
    <>
      <SignTopContent title="Register" subtitle="to create your list" />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="User:"
          type="text"
          register={{ ...register("username") }}
          error={
            errors.username?.message && (
              <span className="error">{errors.username?.message}</span>
            )
          }
        />

        <Input
          name="Email:"
          type="email"
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

        <Input
          name="Confirm your Password:"
          type="password"
          register={{ ...register("confirmPassword") }}
          error={
            errors.confirmPassword?.message && (
              <span className="error">{errors.confirmPassword?.message}</span>
            )
          }
        />
        {/*register button */}
        <button type="submit" className="form--signIn">
          Register
        </button>
        {/*toggle to sign in component */}
        <button
          type="button"
          className="form--register"
          onClick={() => onClick(false)}
        >
          Sign in
        </button>
      </Form>
    </>
  );
};
